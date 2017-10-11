import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpService} from "../http.service";
import {loginForm} from "../models/loginForm";


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
  loginform: loginForm;

  constructor(private http:HttpService) {
    this.userName = "Unknown";
  }

  ngOnInit() {
    this.http.checkCredentials();
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
  public loginData = {username: "vasea", password: "vasea"};
  login(){
   this.http.obtainAccessToken(this.loginData)

  }

  customlogin () {
    return new Promise ((resolve, reject)=> {
      let url = "http://localhost:8080/oauth/token";
      let xhr = new XMLHttpRequest();
      let params  = "grant_type=password&username=vasea&password=vasea";


      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader("Authorization", "Basic " + btoa("acme" + ":" + "acmesecret"));

      xhr.send(params);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log(xhr.response);
            resolve(xhr.response);

            reject(xhr.response);
          }
        }
      }
    });
  }


}

