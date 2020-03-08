import { Component, ViewChild, OnInit } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { UtilsService } from '../services/utils.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { HTTP } from '@ionic-native/http/ngx';
import { IonSlides, AlertController } from '@ionic/angular';
import { Product } from '../shared/models/product';
import { GeneralService } from '../services/general.service';
import { message } from '../helpers/constants';

@Component({
  selector: 'add-location',
  templateUrl: 'add-location.page.html',
  styleUrls: ['add-location.page.scss'],
})
export class AddLocationPage implements OnInit{
  sendingRequest: boolean = false;
  @ViewChild("placesRef", {static: false}) placesRef: GooglePlaceDirective;
  @ViewChild('slideElm', {static: false}) slideElm: IonSlides;
  options: any = { componentRestrictions: { country: 'sn' } };
  logoUrl: string = environment.assetsUrl+'images/location.gif';
  product: Product = new Product();
  optionsGeocoder: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    centeredSlides: true
  };
  constructor(private utilsService: UtilsService, private geolocation: Geolocation,
              private userService: UserService, private http: HTTP, private generaleService: GeneralService,
              public alertController: AlertController) {}
  ngOnInit(){

  }

  ionViewDidLoad(){
    this.slideElm.lockSwipes(true);
  }
  getCurrentUserPosition(){
    this.sendingRequest = !this.sendingRequest;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.product.lattitude = resp.coords.latitude;
      this.product.longitude = resp.coords.longitude;
      this.utilsService.presentToast('Localisation récupérée. Penser à vérifier les informations');
      this.getReverseGeocode();
    }).catch((error) => {
      this.utilsService.presentToast(JSON.stringify(error));
      this.sendingRequest = !this.sendingRequest;
    });
  }

  getReverseGeocode(){
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.product.lattitude+','+this.product.longitude+'&key='+environment.apiGoogleKey, {}, {}).then((resp) => {
        let result = JSON.parse(resp.data).results;
        this.parseResults(result);
    });

  }

  parseResults(result){
    let region = result.find((r) => r.types.indexOf('administrative_area_level_1') != -1);
    let dep = result.find((r) => r.types.indexOf('locality') != -1);
    let commune = result.find((r) => r.types.indexOf('sublocality') != -1);
    let quartier = result.find((r) => r.types.indexOf('neighborhood') != -1);
    let rue = result.find((r) => r.types.indexOf('route') != -1);
    this.product.city = commune && commune.address_components ? commune.address_components[0].long_name : '';
    this.product.region = region && region.address_components ? region.address_components[0].long_name : '';
    this.product.department = dep && dep.address_components ? dep.address_components[0].long_name : '';
    this.product.district = quartier && quartier.address_components ? quartier.address_components[0].long_name : '';
    this.product.street = rue && rue.address_components ? rue.address_components[0].long_name : '';
    this.sendingRequest = !this.sendingRequest;
    this.slideElm.lockSwipes(false);
    this.slideElm.slideNext();
  }


  public handleAddressChange(event) {
    let result = event.address_components;
    let region = result.find((r) => r.types.indexOf('administrative_area_level_1') != -1);
    let dep = result.find((r) => r.types.indexOf('locality') != -1);
    let commune = result.find((r) => r.types.indexOf('sublocality') != -1);
    let quartier = result.find((r) => r.types.indexOf('sublocality') != -1);
    let rue = result.find((r) => r.types.indexOf('route') != -1);
    this.product.city = commune ? commune.long_name: '';
    this.product.region = region ? region.long_name : '';
    this.product.department = dep ? dep.long_name : '';
    this.product.district = quartier ? quartier.long_name : '';
    this.product.street = rue ? rue.long_name : '';
    this.product.lattitude = event.geometry.location.lat();
    this.product.longitude = event.geometry.location.lng();
    this.slideElm.lockSwipes(false);
    this.slideElm.slideNext();
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
              this.saveLocation();
            }
          }
      ]
    });

    await alert.present();
  }

  saveLocation(){
    this.sendingRequest = !this.sendingRequest;
    this.product.reference = 'ECOPUB-'+Math.floor(Date.now() / 1000);
    this.generaleService.saveItem(this.product, 'location').subscribe((resp) =>{
      this.sendingRequest = !this.sendingRequest;
        if(resp['code'] == 200){
          this.utilsService.presentToast(message.success);
          this.product = new Product();
        }else{
          this.utilsService.presentToast(message.error);
        }
    },error => {
      this.sendingRequest = !this.sendingRequest;
      this.utilsService.presentToast(message.error);
    });
  }

  toggleMenu(){
     this.utilsService.toggleMenu();
  }

}
