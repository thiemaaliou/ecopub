import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public clients: Array<any> = [];
  constructor(private cService: GeneralService) {

  }

  ngOnInit() {
    this.cService.getAllClients().subscribe((resp) => {
      if(resp['code'] == 200)
        this.clients = resp['data'];
    });
  }
}
