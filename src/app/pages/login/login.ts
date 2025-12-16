import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLsService } from '../../services/auth-ls-service';

export interface ModelLogin {
  EmailId: string;
  Password: string;
}

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  modelLogin: ModelLogin = {
    EmailId: 'admin77@mail.com',
    Password: '123456',
  };

  constructor(
    private router: Router,
    private serviceLs: AuthLsService
  ) {
  }

  btnLogin(){
    this.serviceLs.login(this.modelLogin).subscribe(
      (next) => {
        this.router.navigate(['home']);
      }
    )
  }

}
