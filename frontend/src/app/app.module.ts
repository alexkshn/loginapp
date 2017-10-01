import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {LoginModule} from "./login/login.module";
import {RouterModule} from '@angular/router';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    LoginModule,
    RouterModule.forRoot([
      {
        path:'',
        component: LoginComponent
      },
      {
        path:'welcome',
        component: WelcomeComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{

  ngOnInit( ) {
  }

}
