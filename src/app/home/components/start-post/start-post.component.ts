// -- Angular
import { Component } from '@angular/core';

// -- Third party
import { ModalController } from '@ionic/angular';

// -- Local files
import { StartPostModalComponent } from './start-post-modal/start-post-modal.component';

@Component({
	selector: 'app-start-post',
	templateUrl: './start-post.component.html',
	styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent {

	constructor(
		public modalController: ModalController,
	) {}

	public async handleCreatePost() {
		const modal = await this.modalController.create({
			component: StartPostModalComponent,
			cssClass: 'start-post-modal'
		});

		await modal.present();

		const { data, role } = await modal.onDidDismiss();

		console.log('=== TEST - start modal', data, role);
	}
}
