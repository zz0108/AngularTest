import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Module
import { FeatureModule } from './feature.module';

//Component
import { AppComponent } from './../app.component';
import { HomeComponent } from './../home/home.component';
import { FeatureComponent } from './feature.component';

const routes: Routes = [{
  path:'',
  component:FeatureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
