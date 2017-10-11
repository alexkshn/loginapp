import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "./models/user";
import {loginForm} from "./models/loginForm";
import { Cookie } from "ng2-cookies";
import {Router} from "@angular/router";


@Injectable()
export class HttpService {

  constructor(private _router: Router,private http: Http) {
  }

  login(loginform:loginForm){
    let username: string = 'acme';
    let password: string = 'acmesecret';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    return this.http.post('localhost:8080/oauth/token', loginform,{headers: headers});
  }

  getUsers() {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout', localStorage.getItem('currentUser'));
  }

  signUp(user: User) {
    return this.http.post('/signUp', user);
  }

  getAllUsers() {
    return this.http.get('/getAllUsers').map((response: Response) => {
      let user = response.json();
      console.log(user);
      return user;
    })
  }

    getUsersTest() {
      return this.http.get('/getAllUsers');
    }

  obtainAccessToken(loginData){
    let params = new URLSearchParams();
    params.append('grant_type','password');
    params.append('username',loginData.username);
    params.append('password',loginData.password);

    // params.append('client_id','foo');
    // params.append('client_secret','foosecret');


    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+btoa("acme:acmesecret"),'Accept':'*/*'});
    let options = new RequestOptions({ headers: headers });
    console.log(params.toString());
     this.http.post('http://localhost:8080/oauth/token', params, {headers:headers})
      .map(res => res.json())
      .subscribe(
        data => {this.saveToken(data),console.log(data)},
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    this._router.navigate(['/']);
  }

  checkCredentials(){
    if (!Cookie.check('access_token')){
      this._router.navigate(['/login']);
    }
  }

  }

