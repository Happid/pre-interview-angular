import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthLsService } from '../../services/auth-ls-service';
import { RefreshTokenLsService } from '../../services/refresh-token-ls-service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  private serviceLS = inject(AuthLsService);
  private refreshTokenLs = inject(RefreshTokenLsService);

  constructor() { }

  ngOnInit() {
    if (this.serviceLS.isLoggedIn()) {
      this.refreshTokenLs.start();
    }
  }

  goToLogout(){
    this.refreshTokenLs.stop();
    this.serviceLS.logout();
  }
}
