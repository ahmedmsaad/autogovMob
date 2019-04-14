import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FeesReqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fees-req',
  templateUrl: 'fees-req.html',
})
export class FeesReqPage {
  requestid:any;
  fees:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.requestid = navParams.get('req');
    this.requestid =this.requestid.id;
    console.log(this.requestid)
    this.ListDocOfReqByID().then((data) => {
      this.fees = data;
      console.log(this.fees)
    })
  }
  
  ListDocOfReqByID(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/feesByReqId/get', {id:this.requestid})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
}
  
  
}
