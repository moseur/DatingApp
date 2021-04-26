import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/Common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Dating App';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/user').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}


