import { Injectable } from '@angular/core';
import { ToastController, MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public toastController: ToastController, private geolocation: Geolocation, private httpClient: HttpClient, private menuCtrl: MenuController) { }

  async presentToast(message: string) {
     const toast = await this.toastController.create({
       message: message,
       duration: 8000
     });
     toast.present();
   }

   getUserPosition(){
     return this.geolocation.getCurrentPosition();
   }

   getLocations(){
      return this.httpClient.get(environment.apiUrl+'product', {}).pipe(response => response);
   }

   toggleMenu(){
     this.menuCtrl.toggle();
   }
}
