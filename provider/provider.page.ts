import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { WelcomePage } from '../welcome/welcome.page';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  items:any;
  

    // showdata=WelcomePage.sendData;
 

  constructor(private router:Router, private alertController:AlertController,private platform:Platform) { }
  Back(){
    this.router.navigate(['./welcome'])
  }
  async exit(){
    // this.router.navigate(['./welcome'])
const alert=await this.alertController.create({

  cssClass :'my-custom-class',
  header:'Confirm!',
  message:'Are you sure? <strong>You want to exit</strong>?',
  buttons:[
    {
      text:'Cancel',
      role:'cancel',
      cssClass:'secondary',
      id:'cancel-button',
      handler:() => {
        console.log('Confirm Cancel: blah');
      }
    },{
      text:'Yes',
      id:'confirm-button',
      handler: () => {
        console.log('Confirm okay');
        navigator['app'].exitApp();
      }
    }
  ]
});
   await alert.present();
   
    
  }
 

  ngOnInit() :void {
    this.platform.backButton.subscribe(async () => {
      if(this.router.url ==='/provider'){
        this.router.navigate(['/welcome'])
      }
      
    })
    // this.item = sessionStorage.getItem("item");
    // console.log(this.item);
    this.items=WelcomePage.allProduct;
    
    // this.disc=sessionStorage.getItem('curr');
    
 }

}
