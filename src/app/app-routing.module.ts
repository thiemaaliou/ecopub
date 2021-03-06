import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsPageModule)
  },
  {
    path: 'add/:url',
    loadChildren: () => import('./add-location/add-location.module').then(m => m.AddLocationPageModule)
  },
  // {
  //   path: 'add-client',
  //   loadChildren: () => import('./add-client/add-client.module').then(m => m.AddClientPageModule)
  // },
  {
    path: 'publicities',
    loadChildren: () => import('./publicities/publicities.module').then(m => m.PublicitiesPageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./onboard/onboard.module').then( m => m.OnboardPageModule)
  },  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./organization/organization.module').then( m => m.OrganizationPageModule)
  },
  {
    path: 'manager-users',
    loadChildren: () => import('./manager-users/manager-users.module').then( m => m.ManagerUsersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
