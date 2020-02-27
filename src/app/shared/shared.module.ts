import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ListItemsPage } from './components/list-items/list-items.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwMP4QNMrB3z7ozZAMKOb1sQpk5eKJLFg'
    }),
    AgmDirectionModule,
    GooglePlaceModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    AgmDirectionModule,
    GooglePlaceModule,
    ListItemsPage
  ],
  declarations: [ListItemsPage],
  entryComponents: [ListItemsPage]
})
export class SharedModule {}
