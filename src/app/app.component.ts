import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AppMenus } from './shared/menus/menu';
import { UtilsService } from './services/utils.service';
import { OrganizationMenus } from './shared/menus/organization-menu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  defaultAvatar: string = environment.assetsUrl+'images/avatar.png';
  public appPages = [];
  loading: boolean = false;
  user: any = {};
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
    });
    
    this.utilsService.toggleMenuData.subscribe((resp) => {
      console.log(resp);
      this.user = JSON.parse(localStorage.getItem('ecopub-user'));
      if(resp == 1){
        this.appPages = AppMenus;
      }else{
        this.appPages = OrganizationMenus;
      }
    });
  }
  logout(){
    localStorage.removeItem('ecopub-token');
    this.route.navigate(['/']);
  }
}
