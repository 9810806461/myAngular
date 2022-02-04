import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform, RouterCustomEvent } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ExitService {

  

  init() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url;
      if (currentUrl === "/Login") {

        // const alert = await this.alertcontroller.create({
        //   message: "Do you really want to exit?",
        //   buttons: [{
        //     text: "Cancle",
        //     role: "cancle"
        //   },
        //   {
        //     text: "Exit",
        //     handler: () => {
              
        //     }
        //   }]
        // });
        // await alert.present();

        this.withAlert("Do you realy want to exit?",()=>{
          navigator['app'].exitApp();
        })
      } else {
        this.navcontroller.back();
      }

    });
  }

async withDoublePress(message:string,action:()=> void){

 }

   async withAlert(message: string, action: () => void) {
    const alert = await this.alertcontroller.create({
      message: "Do you really want to exit?",
      buttons: [{
        text: "Cancle",
        role: "cancle"
      },
      {
        text: "Exit",
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
    await alert.present();
  }
  constructor(private platform: Platform, private router: Router, private navcontroller: NavController, private alertcontroller: AlertController) { }
}
