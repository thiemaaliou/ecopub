import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AppMenus } from './shared/models/menu';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  defaultAvatar: string = environment.assetsUrl+'images/avatar.png';
  public appPages = AppMenus;
  loading: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private utilsService: UtilsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.utilsService.showLoading.subscribe((resp) =>{
      this.loading = resp;
    })
  }
  logout(){
    localStorage.removeItem('ecopub-token');
    this.route.navigate(['/']);
  }
}
