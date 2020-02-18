import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public toastController: ToastController, private geolocation: Geolocation, private httpClient: HttpClient) { }

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

   getLocations(){
      return this.httpClient.post(environment.apiUrl+'products/all', {}).pipe(response => response);
   }
}
