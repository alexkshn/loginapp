import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {User} from "../models/user";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [HttpService]
})
export class WelcomeComponent implements OnInit {

  model: any = {};
  someVar = 'value';


  constructor(private http: HttpService) {}

  ngOnInit() {
  }

  register() {

    let user: User;

    user = <User>(this.model);

    this.http.signUp(user).subscribe(
      (response) => {
        let usersJson = response.json();
        localStorage.setItem('currentUser', JSON.stringify(usersJson));
        console.log('User saved to local storage', localStorage.getItem('currentUser'));
      },
      (error) => console.log(error));


  }

}
