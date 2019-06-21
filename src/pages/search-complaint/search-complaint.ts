import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplainInfoPage} from '../complain-info/complain-info'
import { AlertController } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SearchComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-complaint',
  templateUrl: 'search-complaint.html',
})
export class SearchComplaintPage {
  complaints_replies:any;
  complaints:any;
  nationalID:any;
  replies:any;
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.nationalID= navParams.get('national_id');
    console.log(this.nationalID);
    this.getallComplaints(this.nationalID).then((data) => {
      this.complaints = data[0];
      console.log(data);
      if(this.complaints.length==0){
        console.log("is empty");
        let alert = this.alertCtrl.create({
          subTitle: 'لم يقم هذا الشخص بتقديم شكوى سابقاً',
        });
        alert.present();
        this.navCtrl.pop();

      }else{
        console.log(this.complaints.length)

        //this.navCtrl.push(SearchComplaintPage,{complaints_replies:this.complaints_replies});
      }
    })
    
  }
  gotocomplaint(complaint){
    if(complaint.isProcessed==="لم يتم الرد حتى الآن"){
      let alert = this.alertCtrl.create({

        subTitle: 'لم يتم الرد حتى الآن حاول لاحقاً',

      });
      alert.present();
    }else{
      console.log("done");
      this.navCtrl.push(ComplainInfoPage,{complaint:complaint})
    }
  }
  getallComplaints(nat_id){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/fetchComplainsAndReplies', {citizen_national_id:nat_id})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
  
}
