import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  defaultAvatar: string = environment.assetsUrl+'images/avatar.png';
  public appPages = [
    {
      title: 'Emplacements',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Clients',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Publicités',
      url: '/publicities',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout(){
    localStorage.removeItem('ecopub-token');
    this.route.navigate(['/']);
  }
}
