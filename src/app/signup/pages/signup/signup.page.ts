// -- Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	public signupForm!: FormGroup;

	constructor() {}

	public get firstNameControl(): FormControl {
		return this.signupForm.get('firstName') as FormControl;
	}

	public get lastNameControl(): FormControl {
		return this.signupForm.get('lastName') as FormControl;
	}

	public get emailControl(): FormControl {
		return this.signupForm.get('email') as FormControl;
	}

	public get passwordControl(): FormControl {
		return this.signupForm.get('password') as FormControl;
	}

	public ngOnInit() {
		this._initSignupForm();
	}

	public onSignup(): void {
		console.log(this.signupForm.value);
	}

	private _initSignupForm(): void {
		this.signupForm = new FormGroup({
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
		});
	}
}
