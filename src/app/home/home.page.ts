import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  annonce: any = {
    lat: '',
    long: ''
  }
  constructor() {}
  getCart(){
    this.annonce.lat = JSON.parse(localStorage.getItem('ecopub-lat'));
    this.annonce.long = JSON.parse(localStorage.getItem('ecopub-long'));
  }
}
