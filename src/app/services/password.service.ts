import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Password } from '../models/password';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

   generatePassword(){
    return this.http.get<Password>(`${this.apiUrl}/generatePassword`);
  }

}
