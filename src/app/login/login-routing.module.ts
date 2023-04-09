// -- Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -- Pages
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
	{
		path: '',
		component: LoginPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginPageRoutingModule {}
