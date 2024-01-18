import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  user = {
    username: '',
    email: '',
    passwordHash: ''
  };

  constructor(private http: HttpClient, private userService: UserService) { }

  onSubmit() {
    this.userService.register(this.user).subscribe({
      next: (response) => {
        alert(`Bienvenue sur PasswordGenerator  ${this.user.username} !`)
        console.log('Utilisateur enregistré', response);
      },
      error: (error) => {
        console.error('Erreur d\'inscription', error);
      }
    });
  }
}



