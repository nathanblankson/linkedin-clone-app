import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AvatarPopoverComponent } from './components/avatar-popover/avatar-popover.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule
	],
	declarations: [AvatarPopoverComponent, HeaderComponent, HomePage]
})
export class HomePageModule {}
