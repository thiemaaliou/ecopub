import { Component, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  data: any = {};
  pubImg: string = environment.assetsUrl+'images/publicity.png';
  constructor(private location: Location) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('currentItemEC'));
  }

  goBack(){
    this.location.back();
  }

}
