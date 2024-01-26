import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private bddUrl = 'http://localhost:8080'
  currentUser!: User;
  isConnected: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ access_token: string, user_id: number }>(`${this.bddUrl}/auth/login`, { username, password })
      .pipe(
        tap(response => {
          if (response.access_token && response.user_id) {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('user_id', `${response.user_id}`);
          } else {
            console.error('mauvais user Id ou access token');
          }
        })
      );
  }

 

  checkConnexion(): boolean {
    return !!localStorage.getItem('access_token');
  }


}
