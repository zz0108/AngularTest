import { LayoutGuard } from './layout/layout.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnsureLoginGuard } from './login/ensure-login.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[LayoutGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true,
    useHash:true,
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
