import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { environment } from 'src/environments/environment';
import { locations } from '../helpers/constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  locations: Array<any> = [];
  trashUrl: string = environment.assetsUrl+'images/trash.png';
  coordinated:  {} = locations;
  constructor(private utilsService: UtilsService) {}

  ngOnInit(){
    this.getLocations();
  }
  getLocations(){
    this.utilsService.getLocations().subscribe((resp) => {
      this.locations = resp['data'];
    });
  }

  getDataLocation(event: any){
    console.log(event);
  }
  toggleMenu(){
     this.utilsService.toggleMenu();
  }
}
