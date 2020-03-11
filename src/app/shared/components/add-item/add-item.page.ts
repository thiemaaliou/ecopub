import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FieldModelBase } from '../../models/organization-fields';
import { UtilsService } from 'src/app/services/utils.service';
import { message } from 'src/app/helpers/constants';
import * as moment from 'moment';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  params:  any;
  fields: Array<any> = [];
  selectList: Array<[]> = [];
  @Input() fieldsModels: FieldModelBase<string>;
  form: FormGroup;
  constructor(private navParams: NavParams, public modalController: ModalController,
              private generalService: GeneralService, public alertController: AlertController,
              private utilsService: UtilsService) { }

  ngOnInit() {
    this.fields = this.navParams.get('fields');
    this.params = this.navParams.get('listParams');
    this.form = this.navParams.get('form');
    this.getList();
  }

  ionViewDidLoad(){
  }

  dismiss(data) {
    this.modalController.dismiss({
      'dismissed': true,
      'data': data
    });
  }
  getList(){
    for(let field of this.fields){
      if(field.type == 'select')
        this.getListValues(field);
    }
  }

  async  getListValues(field:  any){
    await this.generalService.getSelectList(field).subscribe((resp) => {
      this.selectList[field.key] =  resp['data'];
    });
  }
  addItem(){
    if(this.form.invalid){
      this.utilsService.presentToast(message.requiredField);
      return;
    }
    this.presentAlert();
  }
  async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Confirmation',
    message: message.confirmAdd,
    cssClass: 'custom-alert',
    mode: 'ios',
    buttons: [
      {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Valider',
          handler: () => {
            this.processingSave();
          }
        }
    ]
  });

  await alert.present();
}

  processingSave(){
    let d = {...this.form.value};
    d.date_start = moment(d.date_start).format('YYYY-MM-DD');
    d.date_end = moment(d.date_end).format('YYYY-MM-DD');
    this.generalService.saveItem(d, this.params.url).subscribe((resp) =>{
        if(resp['code'] == 200){
          this.utilsService.presentToast(message.success);
          this.form.reset();
          this.dismiss(d);
        }else{
          this.utilsService.presentToast(message.error);
        }
    })
  }

}
