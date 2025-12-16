import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthLsService {
  private ACCESS_TOKEN = 'access_token';
  private REFRESH_TOKEN = 'refresh_token';
  private EMAIL_ID = 'email_id';

  constructor(private http: HttpClient, private router: Router) { }

  login(data: { EmailId: string; Password: string }): Observable<any> {
    return this.http.post('/api/JWT/login', data).pipe(
      tap((res: any) => {
        localStorage.setItem(this.EMAIL_ID, res.data.emailId);
        localStorage.setItem(this.ACCESS_TOKEN, res.data.token);
        localStorage.setItem(this.REFRESH_TOKEN, res.data.refreshToken);
      })
    );
  }

  refreshToken(): Observable<any> {
    const data = {
      EmailId: this.getEmailId(),
      token: this.getAccessToken(),
      refreshToken: this.getRefreshToken(),
    }

    return this.http.post('/api/JWT/refresh', data).pipe(
      tap((res: any) => {
        localStorage.setItem(this.ACCESS_TOKEN, res.accessToken);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.EMAIL_ID);
    this.router.navigate(['/']);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  getEmailId(): string | null {
    return localStorage.getItem(this.EMAIL_ID);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

}
