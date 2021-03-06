import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { Interceptor } from './services/interceptor';
import { UtilsService } from './services/utils.service';
import { GeneralService } from './services/general.service';
import { FormGeneratorService } from './services/dynamic-form-generator.service';
import { PopulateFormGroupService } from './services/populate-formgroup.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    UtilsService,
    GeneralService,
    Geolocation,
    NativeGeocoder,
    FormGeneratorService,
    PopulateFormGroupService,
    HTTP,
    {
      provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
