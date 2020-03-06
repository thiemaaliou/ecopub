import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FieldModelBase } from '../../models/organization-fields';
import { UtilsService } from 'src/app/services/utils.service';
import { message } from 'src/app/helpers/constants';

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
    console.log(this.navParams.get('fields'));
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
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
    subHeader: 'Subtitle',
    message: message.confirmAdd,
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
    this.generalService.saveItem(this.form.value, this.params.url).subscribe((resp) =>{
        if(resp['code'] == 200){
          this.utilsService.presentToast(message.success);
          this.dismiss();
        }else{
          this.utilsService.presentToast(message.error);
        }
    })
  }

}
