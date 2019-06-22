import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplainInfoPage} from '../complain-info/complain-info'
import { AlertController } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {SendreplyPage} from '../sendreply/sendreply'
import { ComplaindetailsPage } from '../complaindetails/complaindetails';
import { WelcomePage } from '../welcome/welcome';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  complaints:any;
  userid:any;
  reply:any;

  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.userid=navParams.get('user');
   // console.log(this.userid);
    this.getallComplaints().then((data) => {
      this.complaints = data;
    })
  }

  getallComplaints(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiKey+'api/getComplains', {})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
  gotocomplaint(complaint){
    if(complaint.isProcessed==="تم الرد"){
      this.navCtrl.push(ComplaindetailsPage,{complaint:complaint,user:this.userid})
    }else{
      this.navCtrl.push(SendreplyPage,{complaint:complaint,user:this.userid})
    }
  }
  logout(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
