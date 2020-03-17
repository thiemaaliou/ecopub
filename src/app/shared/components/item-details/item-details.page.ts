import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  data: any = {};
  pubImg: string = environment.assetsUrl+'images/publicity.png';
  constructor(private utilsService: UtilsService) {

  }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('currentItemEC')));
    this.data = JSON.parse(localStorage.getItem('currentItemEC'));
  }

}
