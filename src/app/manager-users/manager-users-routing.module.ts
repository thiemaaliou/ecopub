import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerUsersPage } from './manager-users.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerUsersPageRoutingModule {}
