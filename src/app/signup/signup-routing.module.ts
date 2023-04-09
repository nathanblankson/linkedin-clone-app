// -- Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Pages
import { SignupPage } from './pages/signup/signup.page';


const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
