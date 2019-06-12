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
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchForReqPage');
  }
  showResult(){
    this.getTrancationAndCustomer().then((data)=>{
      console.log(data);
      this.customer=data[0];
      this.transaction=data[1];
      if(this.transaction.Canceled==0){
        let alert = this.alertCtrl.create({
          subTitle: 'تم قبول الطلب'
        });
        alert.present();
      }
      else if(this.transaction.Canceled==1){
        let alert = this.alertCtrl.create({
          title:'تم رفض الطلب',
          subTitle : this.transaction.Notes,
        });
        alert.present();
      }else{
        let alert = this.alertCtrl.create({
          subTitle :'جارى فحص الطلب',
        });
        alert.present();
      }
  
      
      
    })

  }
  getTrancationAndCustomer() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey + 'api/transactions/fetchSec', { Instance_id: this.InstanceId })
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
        }, (err) => {
          let alert = this.alertCtrl.create({
            subTitle: 'تاكد من رقم المعامله'
          });
          alert.present(); 
          reject(err);
        });
    })
  }
  
}
