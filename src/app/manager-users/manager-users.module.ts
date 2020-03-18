import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerUsersPageRoutingModule } from './manager-users-routing.module';

import { ManagerUsersPage } from './manager-users.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerUsersPageRoutingModule,
    SharedModule
  ],
  declarations: [ManagerUsersPage]
})
export class ManagerUsersPageModule {}
