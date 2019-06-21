import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReqinfoDetailsPage } from '../reqinfo-details/reqinfo-details';
import {ReqinfoDataProvider} from'../../providers/reqinfo-data/reqinfo-data';

/**
 * Generated class for the ReqinfoPage page.
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
  selector: 'page-reqinfo',
  templateUrl: 'reqinfo.html',
})
export class ReqinfoPage {
  mydata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.ListAllRequests().then((data) => {
      this.mydata = data;
      this.mydata = this.mydata.requests;
      
      console.log(this.mydata);
    })
  }
  //ionViewDidLoad() {
   // this.ReqinfoService.load();
 // }
  ListAllRequests(){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.get(apiKey+'api/requests/get', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
      })
  }
  openReq(req){
    console.log("done");
    this.navCtrl.push(ReqinfoDetailsPage,{req:req})
    }
  

}
