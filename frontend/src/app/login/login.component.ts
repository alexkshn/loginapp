import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Validators} from "@angular/forms";


class User {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, middleName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit{



  constructor() {
    this.userName = "Unknown";
  }

  userList: any;
  userName: string;
  emailInfoString: string;

  ngOnInit() {
  }

  ngAfterViewInit() {

    console.log (this.userName);

    this.getUsers().then((result)=> {


      let usersJson = JSON.parse(result.toString());
      console.log(usersJson);
      console.log(usersJson.userAuthentication.details.name)
      this.userName = usersJson.userAuthentication.details.name

      this.userList = <User>usersJson;
      let user = this.userList[0];
      this.userName = user.firstName;

    }, (error) => {
      console.error(error);
    });

  }

  getColour () {
    return this.userName === 'Unknown'?'red':'blue';
  }

  allowModify () {
   return this.getColour() === 'red'?true:false;
  }

  validateMail (event: Event) {
    let mail = (<HTMLInputElement>event.target).value;

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    Validators.pattern(EMAIL_REGEXP);

    if (!mail.match(EMAIL_REGEXP))
    {
      this.emailInfoString = 'Please introduce the correct e-mail';
    }

  }



  getUsers () {

    return new Promise ((resolve, reject)=> {
      let url = "/user/";
      let xhr = new XMLHttpRequest();

      xhr.open("GET", url, true);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.response);
            xhr = new XMLHttpRequest()
            xhr.open("GET","/good",true)
            xhr.send();
            reject(xhr.response);

          }
        }
      }
    });
  }

}

