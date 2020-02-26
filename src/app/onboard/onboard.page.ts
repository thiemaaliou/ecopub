import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { slideOptsOne, label } from '../helpers/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  label: any = label;
  @ViewChild('onBoardSlide', {static: false}) onBoardSlide: IonSlides;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextSlide(){
    this.onBoardSlide.isEnd().then((result) => {
      if(!result)
        this.onBoardSlide.slideNext();
      else
        this.route.navigate(['/login']);
    });

  }

}
