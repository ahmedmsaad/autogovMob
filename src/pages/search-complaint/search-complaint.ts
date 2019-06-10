import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplainInfoPage} from '../complain-info/complain-info'
import { AlertController } from 'ionic-angular';
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
  replies:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.complaints_replies= navParams.get('complaints_replies');
    console.log(this.complaints_replies);
    this.complaints=this.complaints_replies[0];
    this.replies=this.complaints_replies[1];
    
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
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchComplaintPage');
  }

}