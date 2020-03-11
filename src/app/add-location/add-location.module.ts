import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddLocationPage } from './add-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddLocationPage
      }
    ])
  ],
  declarations: [AddLocationPage]
})
export class AddLocationPageModule {}
