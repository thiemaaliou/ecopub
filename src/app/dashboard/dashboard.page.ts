import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { SlideHomeOne, SlideHomeCard} from '../helpers/constants';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';

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
      'icon': 'icon-client.png',

    },
    {
      'title': 'Publicités',
      'url': '/publicities',
      'icon': 'icon-publicity.png'
    },
    {
      'title': 'Produits',
      'url': '/home',
      'icon': 'icon-trash.png'
    }
  ];
  user: any;
  statistics: any = {};
  constructor(private menuController: MenuController, private generalService: GeneralService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('ecopub-user'));
  }
  ngAfterViewInit(){
    this.generalService.getStatistics().subscribe((resp) => {
        this.statistics = resp['data'];
    });
  }

  toggleMenu(){
    this.menuController.open('main-menu');
  }

}
