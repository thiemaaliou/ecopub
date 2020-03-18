import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { GeneralService } from '../services/general.service';
import { FieldModelBase } from '../shared/models/organization-fields';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldsUser } from '../shared/models/user';
import { AddItemPage } from '../shared/components/add-item/add-item.page';
import { ModalController } from '@ionic/angular';
import { FormGeneratorService } from '../services/dynamic-form-generator.service';
import { PopulateFormGroupService } from '../services/populate-formgroup.service';


@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.page.html',
  styleUrls: ['./manager-users.page.scss'],
})
export class ManagerUsersPage implements OnInit {
  listParams: any = {
      pageTitle: "Ajouer un utilisateur",
      url: "users",
      component: "Gestion Utilisateurs",
      head: ["Prénom", "Nom", "E-mail", "Téléphone", "Adresse"],
      field: ["first_name", "last_name", "email", "phone", "address"]
  };
  fields: any = FieldsUser;
  fieldsForm: FieldModelBase<string>[] = [];
  form: FormGroup;
  formFields$: Observable<FieldModelBase<any>[]>;
  constructor(public utilsService: UtilsService,
              private formGenerator: FormGeneratorService,
              private populateFormGroupService: PopulateFormGroupService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.formFields$ = this.populateFormGroupService.getFormFields(this.fields);
    this.formFields$.subscribe((resp)=>{
      this.form = this.formGenerator.toFormGroup(resp);
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

  //  const { data } = await modal.onWillDismiss();
   return await modal.present();
  }


  toggleMenu(){
    this.utilsService.toggleMenu();
  }


}
