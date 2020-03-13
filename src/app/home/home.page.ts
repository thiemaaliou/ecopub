import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { environment } from 'src/environments/environment';
import { locations } from '../helpers/constants';
import { GeneralService } from '../services/general.service';
import { ModalController } from '@ionic/angular';
import { ModalInfosPage } from '../shared/components/modal-infos/modal-infos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  locations: Array<any> = [];
  trashUrl: string = environment.assetsUrl+'images/map-location2.png';
  coordinated:  {} = locations;
  constructor(private utilsService: UtilsService, private gService: GeneralService, public modalController: ModalController) {}

  ngOnInit(){
    this.getLocations();
  }
  getLocations(){
    this.utilsService.getLocations().subscribe((resp) => {
      this.locations = resp['data'];
    });
  }

  getDataLocation(event: any, location: any){
    location['url'] = 'product';
    this.gService.getDetailsItem(location).subscribe((resp) => {
        let data = {'product': location, 'publicity': resp['data'], 'title': 'Details du produit'};
        this.presentModal(data);
    });
  }

  async presentModal(data) {
   const modal = await this.modalController.create({
         component: ModalInfosPage,
         showBackdrop: true,
         keyboardClose: true,
         mode: 'ios',
         animated: true,
         cssClass: 'custom-modal-add',
         componentProps: {'data': data}
   });

   return await modal.present();
 }

  toggleMenu(){
     this.utilsService.toggleMenu();
  }
}
