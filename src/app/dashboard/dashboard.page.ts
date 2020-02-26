import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
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
  slideHomeCard: any =  SlideHomeCard;
  constructor() { }

  ngOnInit() {
  }

}
