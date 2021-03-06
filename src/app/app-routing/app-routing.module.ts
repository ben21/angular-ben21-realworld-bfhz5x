import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent } from '../home-page/home-page.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  { path:  '', component: HomePageComponent},
  { path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }