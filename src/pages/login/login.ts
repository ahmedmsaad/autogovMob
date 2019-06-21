import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { apiKey } from "../../app/apiurls/serverurls.js";
import { Http, Headers } from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }
  Login(){
    console.log("data")
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(apiKey + 'api/user/login', {name:this.user,password:this.password})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
         /* if(data.error){+9
            console.log(data.error);
          }*/
         // this.navCtrl.setRoot(LoginPage);
        }, (err) => {
          reject(err);
        });
    });
   // this.navCtrl.push(RegisterPage);
  }
  goToregister(){
    this.navCtrl.push(RegisterPage);
  }
  
}
