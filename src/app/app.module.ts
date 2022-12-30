// -- Angular
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// -- Third party
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// -- Local files
import { AppRoutingModule } from './app-routing.module';

// -- Components
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		// -- Angular
		HttpClientModule,
		BrowserModule,
		// -- Third party
		IonicModule.forRoot(),
		// -- Local files
		AppRoutingModule,
	],
	providers: [
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		}
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
