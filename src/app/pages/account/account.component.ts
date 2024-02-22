import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userId = +localStorage.getItem("user_id")!
  user! : User;

  constructor(private userService : UserService){}

  ngOnInit(): void {

    this.userService.getUserById(this.userId).subscribe(
      (data: User) => {
        this.user = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'utilisateur', error)
      }
    );


}
}