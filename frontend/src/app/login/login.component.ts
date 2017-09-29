import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpService} from "../http.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})

export class LoginComponent implements OnInit, AfterViewInit{

  userList: any;
  userName: string;
  emailInfoString: string;

  constructor(private http:HttpService) {
    this.userName = "Unknown";
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.http.getUsers().subscribe((response) => {

      let usersJson = response.json();
      console.log(usersJson);
      this.userName = usersJson.userAuthentication.details.name;
      localStorage.setItem('currentUser', JSON.stringify(usersJson));

    }), (error) =>
      console.error(error);

  }

  getColour () {
    return this.userName === 'Unknown'?'red':'blue';
  }

  allowModify () {
   return this.getColour() === 'red'?true:false;
  }

  validateMail (event: Event) {

    this.emailInfoString = "";
    let mail = (<HTMLInputElement>event.target).value;
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.emailInfoString = !mail.match(EMAIL_REGEXP)?'Please introduce the correct e-mail':'';

  }

  logout() {
    this.http.logout().subscribe((response)=> {console.log(response)});
  }

}

