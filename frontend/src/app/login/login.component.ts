import {Component, OnInit, AfterViewInit} from '@angular/core';


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
    this.userName = "Default";
  }

  userList: any;
  userName: string;

  ngOnInit() {
  }

  ngAfterViewInit() {

    console.log (this.userName);

    this.getUsers().then((result)=> {


      let usersJson = JSON.parse(result.toString());
      console.log(result);
      console.log(usersJson);
      console.log(usersJson.userAuthentication.details.name)
      this.userName = usersJson.userAuthentication.details.name

      this.userList = <User>usersJson;
      let user = this.userList[1];
      this.userName = user.firstName;
      console.log (this.userName);
    }, (error) => {
      console.error(error);
    });
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

