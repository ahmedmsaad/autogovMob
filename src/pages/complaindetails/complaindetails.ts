import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ComplaindetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaindetails',
  templateUrl: 'complaindetails.html',
})
export class ComplaindetailsPage {
  ComplaintAndReply:any;
  reply:any;
  userid:any;
  username:any;
  replydate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.ComplaintAndReply=navParams.get('complaint');
   
    this.getReply().then((data) => {
      this.reply = data[0].reply_content;
      this.replydate= data[0].created_at;
      console.log(this.reply);
      this.userid= data[0].user_id;

    })
    this.getUser().then((data) => {
    this.username=data[0].name;
    console.log(this.username.name);
    })
  }
  getReply(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/getReplies', {complain_id:this.ComplaintAndReply.id})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
  getUser(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/getuser', {id:this.userid})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
}
