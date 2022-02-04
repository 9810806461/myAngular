import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
 user:any={}
 userSubmitted:boolean;
 PasswordMatch:boolean=false
  
  constructor(private router: Router) { }
  SignupForm = new FormGroup({
    firstName:new FormControl("",[Validators.required ]),
    lastName:new FormControl("",[Validators.required]),
    UserName:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required,Validators.maxLength(8)]),
   cPassword:new FormControl("",[Validators.required,Validators.maxLength(8)]),  
  });


get firstName(){
  return this.SignupForm.get('firstName')
}

get lastName(){
  return this.SignupForm.get('lastName')
}

get UserName(){
  return this.SignupForm.get('UserName')
}

get Password(){
  return this.SignupForm.get('Password')
}

get cPassword(){
  return this.SignupForm.get('cPassword')
}
  


  Buttonclick2(){
    this.router.navigate(['Login'])
  }
 

  DataHandler(){
    this.userSubmitted=true;
    if(this.firstName.valid && this.lastName.valid && this.UserName.valid && this.Password.valid && this.cPassword.valid){
      this.mustMatch();
      if(this.PasswordMatch){
        this.user=Object.assign(this.user,this.SignupForm.value)
        this.addUserHandler(this.user);
        this.SignupForm.reset();
        this.userSubmitted=false;
        this.router.navigate(['Login'])
        alert("Succesfully SignedUp")
      }
      else{
        alert('Password MisMatch')
      }
    }
    
    
  }
  addUserHandler(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[user,...users];
    }else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
  Cancel(){
    this.SignupForm.reset();
  }

mustMatch(){
  if(this.SignupForm.get('Password').value===this.SignupForm.get('cPassword').value){
    this.PasswordMatch=true;
  }
}


  ngOnInit(){}
}




