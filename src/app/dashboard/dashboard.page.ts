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
      'title': 'Nord foire azur',
      'url': 'gestion-compte',
      'icon': ''
    },
    {
      'title': 'Guinaw Rails Sud',
      'url': 'transfert',
      'icon': ''
    },
    {
      'title': 'Patte d\'oie builders',
      'url': 'credit',
      'icon': ''
    },
    {
      'title': 'Marche Dior',
      'url': 'transactions',
      'icon': ''
    },
    {
      'title': 'Croisement PA U22',
      'url': 'rechargement',
      'icon': ''
    },
    {
      'title': 'Yoff tongor',
      'url': 'lier-carte',
      'icon': ''
    }
  ];
  itemBox: Array<{}> = [
    {
      'title': 'Clients',
      'url': 'client',
      'icon': 'slide3.png'
    },
    {
      'title': 'Structures',
      'url': 'organization',
      'icon': 'slide2.png'
    },
    {
      'title': 'Emplacements',
      'url': 'home',
      'icon': 'location.gif'
    },
    {
      'title': 'Produits',
      'url': 'products',
      'icon': 'trash.png'
    }
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuController.open('main-menu');
  }

}
