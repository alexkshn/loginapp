import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getUsers() {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout', localStorage.getItem('currentUser'));
  }


}



/*
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
 */
