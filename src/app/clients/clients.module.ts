import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ClientDetailPage } from '../client-detail/client-detail.page';
import { ClientsPage } from './clients.page';
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
        component: ClientsPage
      },
      {
        path: ':id',
        component: ClientDetailPage
      }
    ])
  ],
  declarations: [ClientsPage, ClientDetailPage]
})
export class ClientsPageModule {}
