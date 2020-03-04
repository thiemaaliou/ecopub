import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from '../shared/components/add-item/add-item.page';
import { FieldsOrganization, FieldModelBase } from '../shared/models/organization-fields';
import { FormGroup }  from '@angular/forms';
import { FormGeneratorService } from '../services/dynamic-form-generator.service';
import { PopulateFormGroupService } from '../services/populate-formgroup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  listParams: any = {
      url: "organizations",
      component: "Organizations",
      head: ["Nom", "Adresse", "E-mail", "Téléphone", "Référant"],
      field: ["name", "address", "email", "phone", "referer"]
  };
  fields: any = FieldsOrganization;
  fieldsForm: FieldModelBase<string>[] = [];
  form: FormGroup;
  formFields$: Observable<FieldModelBase<any>[]>;
  constructor(public modalController: ModalController, private formGenerator: FormGeneratorService,
              private populateFormGroupService: PopulateFormGroupService) {

    }

  ngOnInit() {
    this.formFields$ = this.populateFormGroupService.getFormFields(this.fields);
    this.form = this.formGenerator.toFormGroup(this.fieldsForm);
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

  //  const { data } = await modal.onWillDismiss();
   return await modal.present();
  }



}
