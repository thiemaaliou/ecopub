import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from '../shared/components/add-item/add-item.page';
import { FieldsOrganization } from '../shared/models/organization-fields';

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
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: AddItemPage,
      showBackdrop: true,
      keyboardClose: true,
      mode: 'ios',
      animated: true,
      cssClass: 'custom-modal-add',
      componentProps: {'fields': this.fields}
    });

  //  const { data } = await modal.onWillDismiss();
   return await modal.present();
  }



}
