import { Component, ViewChild, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { UserService } from '../../services/user.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Publicity } from 'src/app/shared/models/publicity';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-add-publicity',
  templateUrl: 'add-publicity.page.html',
  styleUrls: ['add-publicity.page.scss'],
})

export class AddPublicityPage implements OnInit{
  sendingRequest: boolean = false;
  publicity: Publicity = new Publicity();
  clients: Array<any> = [];
  constructor(private utilsService: UtilsService, private gService: GeneralService) {}

  ngOnInit(){
    this.getClients();
  }

  ionViewDidLoad(){  }

  getClients(){
    this.gService.getAllClients().subscribe((resp) => {
      this.clients = resp['data'];
    });
  }
  savePublicity(){
    this.sendingRequest = !this.sendingRequest;
    this.gService.savePublcity(this.publicity).subscribe((resp) =>{
      this.sendingRequest = !this.sendingRequest;
      if(resp['code'] == 200){
        this.utilsService.presentToast("Publicité ajoutée aves succès");

      }else{
        this.utilsService.presentToast("Erreur lors de l'ajout de la Publicité");
      }
    }, error => {
      this.sendingRequest = !this.sendingRequest;
      this.utilsService.presentToast("Impossible de contacter le serveur");
    })
  }

}
