import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

	@ViewChild('form')
	public form!: NgForm;

	constructor(
		public modalController: ModalController,
	) {}

	public ngOnInit() {}

	public onPost(): void {
		if (this.form.invalid) {
			return;
		}

		const { body } = this.form.value;

		this.modalController.dismiss(
			{
				post: {
					body,
				}
			},
			'dimiss'
		)
	}

	public onDismiss(): void {
		this.modalController.dismiss(null, 'dismiss');
	}
}
