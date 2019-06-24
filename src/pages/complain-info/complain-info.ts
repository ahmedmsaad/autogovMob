import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ComplainInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain-info',
  templateUrl: 'complain-info.html',
})
export class ComplainInfoPage {
  ComplaintAndReply:any;
  Complaintimage:any;
  reply:any;
  replyimage:any;
  replydate:any;
  userid:any;
  username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.ComplaintAndReply=navParams.get('complaint');
   // console.log(this.ComplaintAndReply);
   this.Complaintimage=apiKey+'api/getImageComplain/'+this.ComplaintAndReply.id;
   this.replyimage=apiKey+'api/getImageReply/'+this.ComplaintAndReply.id;
   
    this.getReply().then((data) => {
      this.reply = data[0].reply_content;
      this.replydate= data[0].created_at;

     
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
         this.userid=data[0].user_id;
         this.getUser().then((data) => {
           this.username=data[0].name;
         })
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
