import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connexion!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initialForm();
  }

  private initialForm() {
    this.connexion = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnConnect() {
    if (this.connexion.valid) {
      const { username, password } = this.connexion.value;
      this.authService.login(username, password).subscribe({
        next: (response: any) => {
          if (response.access_token && response.user_id) {
            console.log('Connexion réussie et token stocké!');
            setTimeout(() => {
              this.router.navigate(['/generateur']);
            }, 2000);
          } else {
            console.error('Token ou ID utilisateur non reçu dans la réponse.');
          }
        },
        error: (error: any) => {
          console.error('Erreur lors de la connexion:', error);
        }
      });
    }
  }
}
