import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListItemsPage } from './components/list-items/list-items.page';
import { IonicModule } from '@ionic/angular';
import { AddItemPage } from './components/add-item/add-item.page';
import { ModalInfosPage } from './components/modal-infos/modal-infos.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
    ListItemsPage,
  ],
  providers: [],
  declarations: [ListItemsPage, AddItemPage, ModalInfosPage],
  entryComponents: [ListItemsPage, AddItemPage, ModalInfosPage]
})
export class SharedModule {}
