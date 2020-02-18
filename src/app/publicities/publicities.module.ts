import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PublicitiesPage } from './publicities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublicitiesPage
      },
      {
        path: 'add',
        component: PublicitiesPage
      },
    ])
  ],
  declarations: [PublicitiesPage]
})
export class PublicitiesPageModule {}
