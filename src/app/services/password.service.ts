import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }


   generatePassword(){
    return this.http.get<Password>(`${this.apiUrl}/generatePassword`, {headers: this.getHeaders()});
  }

  generatePassword24() {
    return this.http.get<Password>(`${this.apiUrl}/generatePassword24`, { headers: this.getHeaders() });
  }

  generatePassword48() {
    return this.http.get<Password>(`${this.apiUrl}/generatePassword48`, { headers: this.getHeaders() });
  }

  generatePassword96() {
    return this.http.get<Password>(`${this.apiUrl}/generatePassword96`, { headers: this.getHeaders() });
  }

}
