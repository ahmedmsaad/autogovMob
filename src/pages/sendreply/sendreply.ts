import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {WelcomePage} from '../welcome/welcome'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SendreplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendreply',
  templateUrl: 'sendreply.html',
})
export class SendreplyPage {
  Complaint:any;
  reply:any;
  userid:any;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.Complaint=navParams.get('complaint');
    this.userid=navParams.get('user');
   console.log(this.userid);

   }
  sendreply(){

        if(this.reply!=null ){
          return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(apiKey + 'api/makeRep', { user_id:this.userid,reply_content:this.reply,complain_id:this.Complaint.id })
              .map(res => res.json())
              .subscribe(data => {
               console.log(data+"    "+"تالباللبيلابءي")
                resolve(data);
                let alert = this.alertCtrl.create({
                  
                  subTitle: 'تم الرد بنجاح',
                });
                alert.present();
                this.navCtrl.pop();
              }, (err) => {
                reject(err);
              });
          });
        }else{
          let alert = this.alertCtrl.create({
            subTitle: 'تأكد من ادخال البيانات المطلوبه لتقديم الشكوى ',
            buttons: ['موافق']
          });
          alert.present();
        }
      /**/
  }
}
