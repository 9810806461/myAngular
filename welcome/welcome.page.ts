import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  // static sendData:any
  static allProduct:any
  // static sendData1: any;
  static curr:any;
  // Show: any=[];
  // value:string =""

  constructor(private router: Router ,private sr:DataServiceService) { 
    // WelcomePage.allProduct=sr.data;
   }
  Welcome(){
  alert("Succesfully LogedOut")
    this.router.navigate(['./Login'])
    
  }
 
  GoToService(product:any){
    WelcomePage.curr.forEach(element => {
      if(element.service===product){
        WelcomePage.allProduct=element;
      }
      this.router.navigateByUrl("/provider")
      
    }); 
  
   
    
  }
SendToHtml(){
  return WelcomePage.curr
    
  }
 

  ngOnInit() {
    // let i=0;

    fetch('./assets/data.json').then(async (res) => {
      WelcomePage.curr = await res.json();
      //sessionStorage.setItem("curr",this.curr)
      // console.log(WelcomePage.curr)
    })
    
  }

}
