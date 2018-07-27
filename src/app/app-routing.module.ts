import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';//ph added
import { AboutComponent } from './about/about.component';//ph added

const routes: Routes = [
  {//ph added
    path: '',//home path
    component: HomeComponent
  },
  {//ph added
    path: 'about',//about path
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
