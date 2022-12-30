import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-avatar-popover',
	templateUrl: './avatar-popover.component.html',
	styleUrls: ['./avatar-popover.component.scss'],
	standalone: true,
	imports: [
		IonicModule,
	]
})
export class AvatarPopoverComponent implements OnInit {

	constructor() {}

	public ngOnInit() {}

	public onSignOut(): void {

	}
}
