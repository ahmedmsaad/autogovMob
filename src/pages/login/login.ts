import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { apiKey } from "../../app/apiurls/serverurls.js";
import { Http, Headers } from '@angular/http';
import { CitizenPage } from '../citizen/citizen';
import { UserPage } from '../user/user';
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

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }
  Login(){
 
    if(this.user==null && this.password==null){
      let alert = this.alertCtrl.create({
        subTitle: 'ادخل اسم المستخدم والرقم السرى ',
      });
      alert.present();
      return ;
    }
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(apiKey + 'api/user/login', {name:this.user,password:this.password})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
          if(data.length==0){
            let alert = this.alertCtrl.create({
              subTitle: 'تأكد من المستخدم والباسورد',
            });
            alert.present();
            return ;
          }
          if(data[0].employee_id==null){
            this.navCtrl.setRoot(CitizenPage,{citizen:data[0].citizen_national_id});
          }
          else{
            this.navCtrl.setRoot(UserPage,{user:data[0].id});
          }
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
