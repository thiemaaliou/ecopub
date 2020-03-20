import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FieldModelBase } from '../../models/organization-fields';
import { UtilsService } from 'src/app/services/utils.service';
import { message } from 'src/app/helpers/constants';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-infos',
  templateUrl: './modal-infos.page.html',
  styleUrls: ['./modal-infos.page.scss'],
})
export class ModalInfosPage implements OnInit {
  params:  any;
  data: any = {};
  selectList: Array<[]> = [];
  @Input() fieldsModels: FieldModelBase<string>;
  form: FormGroup;
  backImg: string = environment.assetsUrl+'images/back.png';
  textDisponibility: string;
  havePub: boolean = false;
  publicities: Array<{}> = [{}];
  newPublicity: number;
  user: any = {};
  constructor(private navParams: NavParams, public modalController: ModalController,
              private generalService: GeneralService, public alertController: AlertController,
              private utilsService: UtilsService) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.compareDates(this.data['publicity']);
    this.getAllPublicities();
    this.user = JSON.parse(localStorage.getItem('ecopub-user'));
  }

  compareDates(publicity: any){
    if(publicity && publicity.id != undefined){
      if(moment().isAfter(moment(publicity.date_end))){
        this.textDisponibility = message.expiryPublicity;
        this.havePub = false;
      }else{
        this.textDisponibility = message.busy;
        this.havePub = true;
      }
    }else{
      this.textDisponibility = message.disponible;
      this.havePub = false;
    }
  }

  getAllPublicities(){
    this.generalService.getSelectList({'url': 'publicities'}).subscribe((resp) => {
        this.publicities = resp['data'];
    });
  }

  updateProduct(){
    this.generalService.updateItem(this.data['product'], 'product').subscribe((resp) => {
      if(resp['code'] == 200){
        this.utilsService.presentToast(message.success);
        this.dismiss(this.data);
      }else{
        this.utilsService.presentToast(message.error);
      }
    }, (error) => {
      this.utilsService.presentToast(message.error);
    })
  }

  dismiss(data) {
    this.modalController.dismiss({
      'dismissed': true,
      'data': data
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
