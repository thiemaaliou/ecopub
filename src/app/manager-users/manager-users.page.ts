import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.page.html',
  styleUrls: ['./manager-users.page.scss'],
})
export class ManagerUsersPage implements OnInit {

  constructor(public utilsService: UtilsService) { }

  ngOnInit() {
  }

  
 toggleMenu(){
  this.utilsService.toggleMenu();
}


}
