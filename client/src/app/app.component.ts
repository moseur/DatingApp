import { AccountService } from './_Services/account.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/Common/http';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Dating App';
  users: any;

  constructor( private AccountService: AccountService){}
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.AccountService.setCurrentUser(user);
  }
}


