import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'Signup',component:SignupComponent},
  {path:'homepage',component:NicehomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
