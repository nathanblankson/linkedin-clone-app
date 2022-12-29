import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { AvatarPopoverComponent } from './avatar-popover/avatar-popover.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	constructor(private popoverController: PopoverController) {}

	public ngOnInit() {}

	public async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: AvatarPopoverComponent,
			cssClass: 'avatar-popover',
			event: ev,
			showBackdrop: false
		});

		return await popover.present();
	}
}
