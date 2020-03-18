import { Injectable } from '@angular/core';
import { ToastController, MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public showLoading = new Subject<any>();
  public dataComponent: any = new Subject<any>();
  public toggleMenuData: any = new Subject<any>();
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

   toggleLoader(state: boolean){
     this.showLoading.next(state);
   }
   getLoadingState(){
     return this.showLoading.asObservable();
   }

   passDataToComponent(data: any){
     this.dataComponent.next(data);
   }

   getPassedData(){
     return this.dataComponent.asObservable();
   }

   toggleMenuByUser(org_id: number){
     this.toggleMenuData.next(org_id);
   }
   getMenuByUser(){
     return this.showLoading.asObservable();
   }
}
