import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ClientDetailPage } from '../client-detail/client-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path: ':id',
        component: ClientDetailPage
      }
    ])
  ],
  declarations: [ListPage, ClientDetailPage]
})
export class ListPageModule {}
