import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public toastController: ToastController, private geolocation: Geolocation) { }

  async presentToast(message) {
     const toast = await this.toastController.create({
       message: message,
       duration: 8000
     });
     toast.present();
   }

   getUserPosition(){
     return this.geolocation.getCurrentPosition();
   }
}
