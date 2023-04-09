// -- Angular
import { Component, OnInit } from '@angular/core';

// -- Third party
import { IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-auth-title',
	templateUrl: './auth-title.component.html',
	styleUrls: ['./auth-title.component.scss'],
	standalone: true,
	imports: [
		// -- Third party
		IonicModule,
	]
})
export class AuthTitleComponent implements OnInit {

	public subtitle!: string;

	private _subtitles = [
		'Make the most of your professional life',
		'Get connected',
		'Find your next opportunity',
		'Find your next job',
		'Find your next career',
	];

	public ngOnInit() {
		this._setSubtitle();
	}

	private _setSubtitle(): void {
		this.subtitle = this._subtitles[Math.floor(Math.random() * this._subtitles.length)];
	}
}
