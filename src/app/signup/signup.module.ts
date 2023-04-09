// -- Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// -- Third party
import { IonicModule } from '@ionic/angular';

// -- Local files
import { SignupPageRoutingModule } from './signup-routing.module';

// -- Pages
import { SignupPage } from './pages/signup/signup.page';

// -- Standalone components
import { AuthTitleComponent } from '../core/components/auth/auth-title/auth-title.component';

@NgModule({
	imports: [
		// -- Angular
		CommonModule,
		ReactiveFormsModule,
		// -- Third party
		IonicModule,
		// -- Local files
		SignupPageRoutingModule,
		// -- Standalone components
		AuthTitleComponent,
	],
	declarations: [
		SignupPage,
	]
})
export class SignupPageModule {}
