import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AuthLsService } from './auth-ls-service';

@Injectable({
  providedIn: 'root',
})
export class RefreshTokenLsService {

  private refreshSub?: Subscription;

  constructor(private authService: AuthLsService) {}

  start() {
    // refresh setiap 1 menit
    this.refreshSub = interval(1 * 60 * 1000).subscribe(() => {
      this.authService.refreshToken().subscribe();
    });
  }

  stop() {
    this.refreshSub?.unsubscribe();
  }
}
