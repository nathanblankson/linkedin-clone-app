// -- Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// -- Standalone components
import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	standalone: true,
	imports: [
		// -- Angular
		RouterModule,
		// -- Standalone components
		HeaderComponent,
	]
})
export class LayoutComponent {}
