import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FieldModelBase } from '../../models/organization-fields';

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
  @Input() form: FormGroup;
  constructor(private navParams: NavParams, public modalController: ModalController,
              private generalService: GeneralService, public alertController: AlertController) { }

  ngOnInit() {
    this.fields = this.navParams.get('fields');
    this.params = this.navParams.get('listParams');
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
    console.log(field);
    await this.generalService.getSelectList(field).subscribe((resp) => {
      this.selectList[field.model] =  resp['data'];
    });
  }
  addItem(form: NgForm){
    console.log(form, this.fields);
  }
  async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Confirmation',
    subHeader: 'Subtitle',
    message: 'Voulez-vous vraiment ajouter cet .',
    buttons: [
      {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
    ]
  });

  await alert.present();
}

}
