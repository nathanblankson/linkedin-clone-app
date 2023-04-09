import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public loginForm!: FormGroup;

	constructor() {}

	public ngOnInit() {
		this._initLoginForm();
	}

	public onLogin(): void {
		console.log(this.loginForm.value);
	}

	private _initLoginForm(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
		});
	}
}
