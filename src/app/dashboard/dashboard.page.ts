import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { SlideHomeOne, SlideHomeCard} from '../helpers/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('homeSlide', {static: false}) homeSlide: IonSlides;
  @ViewChild('homeSlideCard', {static: false}) homeSlideCard: IonSlides;
  slideHomeOne: any = SlideHomeOne;
  slideOpt: any =  SlideHomeCard;
  menus: Array<{}> = [
    {
      'title': 'Nord foire ',
      'url': '/home',
      'icon': ''
    },
    {
      'title': 'Guinaw Rails Sud',
      'url': '/home',
      'icon': ''
    },
    {
      'title': 'Patte d\'oie',
      'url': '/home',
      'icon': ''
    },
    {
      'title': 'Marche Dior',
      'url': '/home',
      'icon': ''
    }
  ];
  itemBox: Array<{}> = [
    {
      'title': 'Clients',
      'url': '/clients',
      'icon': 'slide3.png',

    },
    {
      'title': 'Publicités',
      'url': '/publicities',
      'icon': 'publicity.png'
    },
    {
      'title': 'Produits',
      'url': '/home',
      'icon': 'trash2.png'
    }
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuController.open('main-menu');
  }

}
