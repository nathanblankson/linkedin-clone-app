// -- Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// -- Third party
import { IonicModule } from '@ionic/angular';

// -- Local files
import { LoginPageRoutingModule } from './login-routing.module';

// -- Standalone components
import { AuthTitleComponent } from '../core/components/auth/auth-title/auth-title.component';

// -- Pages
import { LoginPage } from './pages/login/login.page';

@NgModule({
	imports: [
		// -- Angular
		CommonModule,
		ReactiveFormsModule,
		// -- Third Party
		IonicModule,
		// -- Local files
		LoginPageRoutingModule,
		// -- Standalone components
		AuthTitleComponent,
	],
	declarations: [
		LoginPage,
	]
})
export class LoginPageModule {}
