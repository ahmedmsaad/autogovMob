import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SendComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {WelcomePage} from '../welcome/welcome'


@IonicPage()
@Component({
  selector: 'page-send-complaint',
  templateUrl: 'send-complaint.html',
})
export class SendComplaintPage {
  Customername:string="";
  CustomerNationalID:any;
  complaint:string="";
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendComplaintPage');
  }
  sendcomplaint() {
    console.log(this.CustomerNationalID);
    if(this.CustomerNationalID!=null && this.complaint!=="" && this.Customername!=="" ){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(apiKey + 'api/makeComplain', { citizen_national_id:this.CustomerNationalID,complain_content:this.complaint,citizen_name:this.Customername })
          .map(res => res.json())
          .subscribe(data => {
            console.log(data)
            resolve(data);
            let alert = this.alertCtrl.create({
              
              subTitle: 'تم إرسال الشكوى بنجاح',
            });
            alert.present();
            this.navCtrl.setRoot(WelcomePage);
          }, (err) => {
            reject(err);
          });
      });
    }else{
      let alert = this.alertCtrl.create({
        title: 'خطأ',
        subTitle: 'تأكد من ادخال البيانات المطلوبه لتقديم الشكوى ',
        buttons: ['موافق']
      });
      alert.present();
    }
   /**/
  }
}
