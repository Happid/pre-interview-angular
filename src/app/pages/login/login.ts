import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements AfterViewInit {
  constructor(private router: Router) {}

  emailType = 'text';
  passwordType = 'text';

  email = '';
  password = '';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.emailType = 'email';
      this.passwordType = 'password';

      this.email = '';
      this.password = '';
    });
  }

  handleBtnLogin() {
    this.router.navigate(['home']);
  }
}
