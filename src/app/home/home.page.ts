import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { environment } from 'src/environments/environment';
import { locations } from '../helpers/constants';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  locations: Array<any> = [];
  trashUrl: string = environment.assetsUrl+'images/map-location2.png';
  coordinated:  {} = locations;
  constructor(private utilsService: UtilsService, private gService: GeneralService) {}

  ngOnInit(){
    this.getLocations();
  }
  getLocations(){
    this.utilsService.getLocations().subscribe((resp) => {
      this.locations = resp['data'];
    });
  }

  getDataLocation(event: any, location: any){
    console.log(event, location);
    location['url'] = 'product';
    this.gService.getDetailsItem(location).subscribe((resp) => {

    });
  }
  toggleMenu(){
     this.utilsService.toggleMenu();
  }
}
