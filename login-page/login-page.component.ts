import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
 
checkTo:boolean=false
  
  constructor(private router: Router) { }
 
 
  LoginForm = new FormGroup({
    
    UserName:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required,Validators.maxLength(5)]),
 
  });



get UserName(){
  return this.LoginForm.get('UserName')
}

get Password(){
  return this.LoginForm.get('Password')
}


  Buttonclick(){
    this.router.navigate(['./signup'])
    
  }

  
    UserLogin(){
      this.checkUser()
      
      if(this.checkTo){
        this.router.navigate(['./welcome']);
        alert("Sucessfuly Login")

      }else{
        alert("Invalid Crediantial")
     

      }
    }
    
  
  checkUser(){
  let  check:any;

    if(localStorage.getItem('Users')){
      check = JSON.parse(localStorage.getItem('Users'))
      check.forEach(element => {
        console.log(element.UserName,this.UserName.value)

        if((element.UserName === this.LoginForm.get('UserName').value) && element.Password === this.LoginForm.get('Password').value){
          this.checkTo=true;
        }
      });
    }
  }
  ngOnInit(){

  }
}

