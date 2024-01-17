import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/models/password';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit{

  password!: Password;

  constructor(private passwordService: PasswordService) { }
  ngOnInit(): void {
  }

  async generatePassword() {
     this.passwordService.generatePassword().subscribe((data) => {
      this.password = data;
      console.log(this.password)
    });
    return this.password;
  }
}
