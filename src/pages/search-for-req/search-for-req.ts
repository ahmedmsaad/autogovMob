import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { apiKey } from "../../app/apiurls/serverurls.js";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { resolveDefinition } from '@angular/core/src/view/util';
import {WelcomePage} from "../welcome/welcome"
import { Title } from '@angular/platform-browser';
/**
 * Generated class for the SearchForReqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-for-req',
  templateUrl: 'search-for-req.html',
})
export class SearchForReqPage {
  InstanceId: any;
  customer:any;
  transaction:any;
  name:string=" ";

  firstMessage:any;
  shortMessage:any;
  canceled:any;
  stop_Reasons:any;
  created_at:any;
  updated_at:any;
  forms:any;


  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http) {
  }
  showResult(){
    this.getTrancation().then((data)=>{
      this.transaction=data;
      if (this.transaction.length==0){
        let alert = this.alertCtrl.create({
          subTitle: 'تاكد من رقم المعامله'
        });
        alert.present(); 
        return;
      }   
      this.firstMessage="الخطوات المكتمله ";
      this.canceled=this.transaction.canceled;
      this.stop_Reasons=this.transaction.stop_Reasons;
      this.created_at=this.transaction.created_at.date;
      this.updated_at=this.transaction.updated_at.date;
      this.forms=this.transaction.forms;
      console.log(this.transaction);
      
      if(this.canceled==0){
        this.shortMessage="جارى معالجه الطلب واستكمال الخطوات  ";
      }
      else{
        this.shortMessage=" تم رفض الطلب  ";
        
      }
    })
  }
  getTrancation() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey + 'api/getTransactionData', { instance_id: this.InstanceId })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          
          reject(err);
        });
    })
  }
  
}
