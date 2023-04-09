// -- Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// -- Third party
import { IonicModule } from '@ionic/angular';

// -- Local files
import { HomePageRoutingModule } from './home-routing.module';

// -- Standalone components
import { HeaderComponent } from '../core/components/layout/header/header.component';

// -- Pages
import { HomePage } from './pages/home/home.page';

// -- Components
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { StartPostModalComponent } from './components/start-post/start-post-modal/start-post-modal.component';
import { StartPostComponent } from './components/start-post/start-post.component';

@NgModule({
	imports: [
		// -- Angular
		CommonModule,
		FormsModule,
		// -- Third Party
		IonicModule,
		// -- Local files
		HomePageRoutingModule,
		// -- Standalone components
		HeaderComponent,
	],
	declarations: [
		// -- Pages
		HomePage,
		// -- Components
		AdvertisingComponent,
		AllPostsComponent,
		ProfileSummaryComponent,
		StartPostModalComponent,
		StartPostComponent,
	]
})
export class HomePageModule {}
