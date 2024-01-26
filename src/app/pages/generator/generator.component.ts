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
  password24!: Password;
  password48!: Password;
  password96!: Password;

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

  async generatePassword24() {
    this.passwordService.generatePassword24().subscribe((data) => {
      this.password24 = data;
      console.log(this.password24)
    });
    return this.password;
  }

  async generatePassword48() {
    this.passwordService.generatePassword48().subscribe((data) => {
      this.password48 = data;
      console.log(this.password48)
    });
    return this.password;
  }

  async generatePassword96() {
    this.passwordService.generatePassword96().subscribe((data) => {
      this.password96 = data;
      console.log(this.password96)
    });
    return this.password;
  }
}
