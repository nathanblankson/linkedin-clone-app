// -- Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -- Pages
import { HomePage } from './pages/home.page';

// -- Standalone components
import { LayoutComponent } from '@core/components/layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: HomePage
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomePageRoutingModule {}
