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
    this.getallComplaints().then((data) => {
      this.complaints_replies = data;
      
      if(this.complaints_replies[0].length==0){
        console.log("is empty");
        let alert = this.alertCtrl.create({
          subTitle: 'لم يقم هذا الشخص بتقديم شكوى سابقاً',
        });
        alert.present();
        this.navCtrl.pop();

      }else{
        //console.log(this.complaints_replies[0].length)
        this.navCtrl.push(SearchComplaintPage,{complaints_replies:this.complaints_replies});
      }
    })
    
  }
  gotocomplaint(complaint){
    if(complaint.isProcessed==="لم يتم الرد حتى الآن"){
      let alert = this.alertCtrl.create({
        title: 'خطأ',
        subTitle: 'لم يتم الرد حتى الآن حاول لاحقاً',
        buttons: ['موافق']
      });
      alert.present();
    }else{
      console.log("done");
      this.navCtrl.push(ComplainInfoPage,{complaint:complaint})
    }
  }
  getallComplaints(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiKey+'api/fetchComplainsAndReplies', {citizen_national_id:this.nationalID})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchComplaintPage');
  }

}
