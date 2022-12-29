import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdvertisingComponent } from './components/advertising/advertising.component';
import { AvatarPopoverComponent } from './components/header/avatar-popover/avatar-popover.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { ModalComponent } from './components/start-post/modal/modal.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule
	],
	declarations: [
		AdvertisingComponent,
		AvatarPopoverComponent,
		HeaderComponent,
		HomePage,
		ModalComponent,
		ProfileSummaryComponent,
		StartPostComponent,
	]
})
export class HomePageModule {}
