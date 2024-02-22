import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private router : Router){}
  
  deconnect(){
    localStorage.removeItem("access_token")
    alert("Vous êtes déconnecter")
    this.router.navigate(['/home'])
  }


}
