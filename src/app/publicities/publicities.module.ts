import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PublicitiesPage } from './publicities.page';
import { AddPublicityPage } from './add-publicity/add-publicity.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublicitiesPage
      },
      {
        path: 'add',
        component: AddPublicityPage
      },
    ])
  ],
  declarations: [PublicitiesPage, AddPublicityPage]
})
export class PublicitiesPageModule {}
