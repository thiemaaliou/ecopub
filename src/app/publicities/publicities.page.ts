import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { FieldModelBase } from '../shared/models/organization-fields';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGeneratorService } from '../services/dynamic-form-generator.service';
import { PopulateFormGroupService } from '../services/populate-formgroup.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { AddItemPage } from '../shared/components/add-item/add-item.page';
import { FieldsPublicities } from '../shared/models/publicity';

@Component({
  selector: 'app-publicities',
  templateUrl: 'publicities.page.html',
  styleUrls: ['publicities.page.scss']
})
export class PublicitiesPage implements OnInit {
  public publicities: Array<any> = [];
  listParams: any = {
      pageTitle: "Ajouer une publicité",
      url: "publicities",
      component: "publicities",
      head: ["Nom", "Adresse", "E-mail", "Téléphone", "Référant"],
      field: ["name", "address", "email", "phone", "referer"]
  };
  fields: any = FieldsPublicities;
  fieldsForm: FieldModelBase<string>[] = [];
  form: FormGroup;
  formFields$: Observable<FieldModelBase<any>[]>;
  constructor(public modalController: ModalController, private formGenerator: FormGeneratorService,
              private populateFormGroupService: PopulateFormGroupService, private gService:  GeneralService,
              private utilsService: UtilsService) {

  }

  ngOnInit() {
    this.formFields$ = this.populateFormGroupService.getFormFields(this.fields);
    this.formFields$.subscribe((resp)=>{
      this.form = this.formGenerator.toFormGroup(resp);
    });
    this.gService.getAllPublicities().subscribe((resp) => {
      if(resp['code'] == 200)
        this.publicities = resp['data'];
    });
  }
  async openModal(){
    const modal = await this.modalController.create({
      component: AddItemPage,
      showBackdrop: true,
      keyboardClose: true,
      mode: 'ios',
      animated: true,
      cssClass: 'custom-modal-add',
      componentProps: {'fields': this.fields, 'listParams': this.listParams, 'form': this.form}
    });

  modal.onDidDismiss().then((resp) =>{
    if(resp['data'] != undefined && resp['data']['data'] != undefined){
      this.publicities.push(resp['data']['data']);
    }
  })
   return await modal.present();
  }

 toggleMenu(){
   this.utilsService.toggleMenu();
 }
}
