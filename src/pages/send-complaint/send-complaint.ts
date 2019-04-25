import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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



@IonicPage()
@Component({
  selector: 'page-send-complaint',
  templateUrl: 'send-complaint.html',
})
export class SendComplaintPage {
  Customername:string="";
  CustomerNationalID:any;
  complaint:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendComplaintPage');
  }
  sendcomplaint() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey + 'api/makeComplain', { citizen_national_id:this.CustomerNationalID,complain_content:this.complaint })
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
        }, (err) => {
          reject(err);
        });
    })
  }
}
