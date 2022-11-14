import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  regForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\W]{8,63}$'
        ),
      ]),
    ],
    confirmPassword: ['', [Validators.required]],
    gender: ['', Validators.required],
    age: ['', Validators.compose([Validators.required, this.verifyAge])],
    phone: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('(9|8|7)[0-9]{9}'),
      ]),
    ],
    street: [''],
    city: [''],
    state: [''],
    zipCode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
  });

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  save(data: any) {
    this.user.post(data.value).subscribe({
      next(value) {
        alert('Saved' + value);
      },
      error(e) {
        alert('not saved' + e);
      },
    });
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
  }

  // Check Password
  verifypwd(c: AbstractControl): ValidationErrors | null {
    const password = c.get('password');
    const cnfpassword = c.get('confirmPassword');
    return password && cnfpassword && password.value === cnfpassword.value
      ? { verifypwd: true }
      : null;
  }

  //Verify Age
  verifyAge(c: AbstractControl) {
    if (c.value != '') {
      const age = parseInt(c.value);
      if (age < 18) {
        return { verifyAge: true };
      }
    }
    return null;
  }
}
