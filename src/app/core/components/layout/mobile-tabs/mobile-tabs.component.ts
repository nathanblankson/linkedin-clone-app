import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { StartPostModalComponent } from '../../../../home/components/start-post/start-post-modal/start-post-modal.component';

@Component({
	selector: 'app-mobile-tabs',
	templateUrl: './mobile-tabs.component.html',
	styleUrls: ['./mobile-tabs.component.scss'],
	standalone: true,
	imports: [
		IonicModule,
	]
})
export class MobileTabsComponent {

	constructor(
		private modalController: ModalController,
	) {}

	public async handleCreatePost() {
		const modal = await this.modalController.create({
			component: StartPostModalComponent,
			cssClass: 'start-post-modal'
		});

		await modal.present();
	}
}
