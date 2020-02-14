import { Component, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { UtilsService } from '../services/utils.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-add-product',
  templateUrl: 'add-product.page.html',
  styleUrls: ['add-product.page.scss'],
})
export class AddProductPage {
  @ViewChild("placesRef", {static: false}) placesRef: GooglePlaceDirective;
  options: any = { componentRestrictions: { country: 'sn' } };
  constructor(private utilsService: UtilsService, private geolocation: Geolocation) {}

  getCurrentUserPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.utilsService.presentToast(JSON.stringify(resp.coords.latitude));
      localStorage.setItem('ecopub-lat', JSON.stringify(resp.coords.latitude));
      localStorage.setItem('ecopub-long', JSON.stringify(resp.coords.longitude));
    }).catch((error) => {
      this.utilsService.presentToast(JSON.stringify(error));
      });
  }


  public handleAddressChange(event, type?: string) {
    this.utilsService.presentToast(JSON.stringify(event));
  }

}
