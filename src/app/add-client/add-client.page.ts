import { Component, ViewChild, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { IonSlides } from '@ionic/angular';
import { Client } from '../shared/models/client';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: 'add-client.page.html',
  styleUrls: ['add-client.page.scss'],
})
export class AddClientPage implements OnInit{
  sendingRequest: boolean = false;
  @ViewChild('slideElm', {static: false}) slideElm: IonSlides;
  logoUrl: string = environment.assetsUrl+'images/location.gif';
  client: Client = new Client();
  clientType: Array<{name: '', id: ''}> = [];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    centeredSlides: true
  };
  constructor(private utilsService: UtilsService, private route: Router, private http: HTTP, private generalService: GeneralService) {}
  ngOnInit(){
    this.getClientType();
  }

  ionViewDidLoad(){
    this.slideElm.lockSwipes(true);

  }

  nextStep(){
   this.slideElm.lockSwipes(false);
   this.slideElm.slideNext();
  }

  getClientType(){
    this.generalService.getClientType().subscribe((resp) =>{
      this.clientType = resp['data'];
    })
  }

  saveClient(){
    this.sendingRequest = !this.sendingRequest;
    this.generalService.saveClient(this.client).subscribe((resp) => {
      this.sendingRequest = !this.sendingRequest;
        if(resp['code'] == 200){
          this.utilsService.presentToast("Client ajouté avec succès");
          this.route.navigate(['/list']);
        }else{
          this.utilsService.presentToast("Erreur lors de l'ajout du client");
        }
    }, error =>{
      this.sendingRequest = !this.sendingRequest;
        this.utilsService.presentToast("Connexion impossible");
    });
  }

}
