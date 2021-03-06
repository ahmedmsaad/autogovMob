import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendComplaintPage} from '../send-complaint/send-complaint'
import { SearchComplaintPage } from '../search-complaint/search-complaint';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ComplainInfoPage } from '../complain-info/complain-info';

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {
  CitizinNationalId:any;
  complaints_replies:any;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsPage');
  }
  showResult(){
    console.log(this.CitizinNationalId);
    this.getallComplaintsAndReplies().then((data) => {
      this.complaints_replies = data;
      
      if(this.complaints_replies[0].length==0){
        console.log("is empty");
        let alert = this.alertCtrl.create({
          title: 'خطأ',
          subTitle: 'لم يقم هذا الشخص بتقديم شكوى سابقاً',
          buttons: ['اعاده المحاوله']
        });
        alert.present();
      }else{
        //console.log(this.complaints_replies[0].length)
        this.navCtrl.push(SearchComplaintPage,{complaints_replies:this.complaints_replies});
      }
    })
    
     //console.log(this.complaints_replies)

  }
  gotocomplaintForm(){
    this.navCtrl.push(SendComplaintPage)
  }
  gotoComplainInfoPage(){
    this.navCtrl.push(ComplainInfoPage)
  }
  


  getallComplaintsAndReplies(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/fetchComplainsAndReplies', {citizen_national_id:this.CitizinNationalId})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
}
}
