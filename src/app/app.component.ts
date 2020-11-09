import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController , IonRouterOutlet, AlertController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { AppMenus } from './shared/menus/menu';
import { UtilsService } from './services/utils.service';
import { OrganizationMenus } from './shared/menus/organization-menu';
import { message } from './helpers/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet;
  defaultAvatar: string = environment.assetsUrl+'images/avatar.png';
  public appPages = [];
  loading: boolean = false;
  user: any = {};
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route: Router,
    private utilsService: UtilsService,
    private menu: MenuController,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack() && this.route.url != '/home') {
        this.routerOutlet.pop();
      } else if(this.route.url == '/home'){
        this.presentAlert();
      }else if (this.route.url === '/login') {
          navigator['app'].exitApp();
      } else {
        alert('test');
      }
    });


    this.utilsService.showLoading.subscribe((resp) =>{
      this.loading = resp;
    });

    this.utilsService.toggleMenuData.subscribe((resp) => {
      this.user = JSON.parse(localStorage.getItem('ecopub-user'));
      if(resp == 1){
        this.appPages = AppMenus;
      }else{
        this.appPages = OrganizationMenus;
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: message.canDisconnect,
      cssClass: 'custom-alert',
      mode: 'ios',
      buttons: [
        {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: 'Valider',
            handler: () => {
              this.logout();
            }
          }
      ]
  });

  await alert.present();
}

  logout(){
    this.menu.close();
    localStorage.removeItem('ecopub-token');
    this.route.navigate(['/']);
  }
}
