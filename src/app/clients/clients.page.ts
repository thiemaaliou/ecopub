import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { FieldModelBase } from '../shared/models/organization-fields';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormGeneratorService } from '../services/dynamic-form-generator.service';
import { PopulateFormGroupService } from '../services/populate-formgroup.service';
import { FieldsClient } from '../shared/models/client';
import { AddItemPage } from '../shared/components/add-item/add-item.page';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage implements OnInit {
  public clients: Array<any> = [];
  listParams: any = {
      pageTitle: "Ajouer un client",
      url: "clients",
      component: "clients",
      head: ["Nom", "Adresse", "E-mail", "Téléphone", "Référant"],
      field: ["name", "address", "email", "phone", "referer"]
  };
  fields: any = FieldsClient;
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
    this.gService.getAllClients().subscribe((resp) => {
      if(resp['code'] == 200)
        this.clients = resp['data'];
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
      this.clients.push(resp['data']['data']);
    }
  })
   return await modal.present();
  }

 toggleMenu(){
   this.utilsService.toggleMenu();
 }



}
