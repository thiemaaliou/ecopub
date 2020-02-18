import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-detail',
  templateUrl: 'client-detail.page.html',
  styleUrls: ['client-detail.page.scss']
})
export class ClientDetailPage implements OnInit {
  client: any = {};
  defaultImg: string = environment.assetsUrl+'images/logo.jpg';
  constructor(private cService: GeneralService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.client.id = +this.route.snapshot.paramMap.get('id');
    this.cService.getClientDetails(this.client.id).subscribe((resp) => {
      this.client = resp['data'];
    });
  }
}
