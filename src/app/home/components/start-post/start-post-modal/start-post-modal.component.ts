// -- Angular
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// -- Third party
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-start-post-modal',
	templateUrl: './start-post-modal.component.html',
	styleUrls: ['./start-post-modal.component.scss'],
})
export class StartPostModalComponent {

	@ViewChild('form')
	public form!: NgForm;

	constructor(
		public modalController: ModalController,
	) {}

	public onPost(): void {
		if (this.form.invalid) {
			return;
		}

		const { body } = this.form.value;

		this.onDismiss(
			{
				post: {
					body,
				}
			}
		);
	}

	public onDismiss(data: any = null, reason = 'dismiss'): void {
		this.modalController.dismiss(data, reason);
	}
}
