import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-publicities',
  templateUrl: 'publicities.page.html',
  styleUrls: ['publicities.page.scss']
})
export class PublicitiesPage implements OnInit {
  public publicities: Array<any> = [];
  constructor(private cService: GeneralService) {

  }

  ngOnInit() {
    this.cService.getAllPublicities().subscribe((resp) => {
      if(resp['code'] == 200)
        this.publicities = resp['data'];
    });
  }
}
