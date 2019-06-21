import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { apiKey } from "../../app/apiurls/serverurls.js";
import { Http, Headers } from '@angular/http';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name:any;
  nationalId:any;
  password:any;
  confirmPassword:any;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public http: Http) 
  {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    if(this.nationalId!=null && this.name!=null && this.password!=null && this.confirmPassword!=null ){
      if(this.nationalId.length!=14){
        let alert = this.alertCtrl.create({
          subTitle: 'الرقم القومى غير صحيح',
        });
        alert.present();
        return ;
      }
      else if(this.nationalId.length==14){
        if(this.nationalId[0]>1 && this.nationalId[1]<=3){
          let alert = this.alertCtrl.create({
            subTitle: 'الرقم القومى غير صحيح',
          });
          alert.present();
          return ;
        }else{
          for (let index = 0; index < 14; index++) {
            if(this.nationalId[index]>=0 && this.nationalId[index]<=9 ){
              continue;
            }else{
              let alert = this.alertCtrl.create({
                subTitle: 'يجب ان يكون الرقم القومى ارقام فقط ',
              });
              alert.present();
              return ;
            }
            
          }
        }
        
      }
      if(this.confirmPassword==this.password){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post(apiKey + 'api/citizen/insert', {})
            .map(res => res.json())
            .subscribe(data => {
              console.log(data)
              resolve(data);
              this.navCtrl.setRoot(LoginPage);
            }, (err) => {
              reject(err);
            });
        });
      }
      else{
        let alert = this.alertCtrl.create({
          subTitle: 'يجب التاكد من مطابقه الرقم السرى ',
        });
        alert.present();
      }
    }else{
      let alert = this.alertCtrl.create({
        subTitle: 'تأكد من ادخال جميع البيانات',
      });
      alert.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
