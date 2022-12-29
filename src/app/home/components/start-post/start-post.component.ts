import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
	selector: 'app-start-post',
	templateUrl: './start-post.component.html',
	styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {

	constructor(
		public modalController: ModalController,
	) {}

	public ngOnInit() {}

	public async presentModal() {
		const modal = await this.modalController.create({
			component: ModalComponent,
			cssClass: 'start-post-modal'
		});

		await modal.present();

		const { data, role } = await modal.onDidDismiss();

		console.log('=== TEST - start modal', data, role);
	}
}
