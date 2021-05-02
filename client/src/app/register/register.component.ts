import { AccountService } from './../_Services/account.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any={};
  
  constructor(private AccountService: AccountService) {}

  ngOnInit(): void {
  }

  register(){
    this.AccountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cancel();
    }, error=> {
      console.log(error);
    })
    console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
