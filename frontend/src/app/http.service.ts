import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "./models/user";


@Injectable()
export class HttpService {

  constructor(private http: Http) {
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

  }

