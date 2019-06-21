import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the CitizenProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citizen-profile',
  templateUrl: 'citizen-profile.html',
})
export class CitizenProfilePage {
  citizen_national_id="";
  user:any;
  citizen_name:any;
  address:any;
  sex:any
  constructor(private alertCtrl: AlertController,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
 
    this.citizen_national_id= navParams.get('national_id');
    this.getallComplaints().then((data) => {
      console.log(data);
      this.user = data;
      this.citizen_name=data[0].citizen_name;
      this.address=data[0].address;
      this.sex=data[0].sex;
    })
    
  }

  getallComplaints(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(apiKey+'api/user/getCitizenByNationalId',{citizen_national_id:this.citizen_national_id})
      .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
  save(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(apiKey+'api/user/updateUserAndCitizen',{citizen_national_id:this.citizen_national_id,address:this.address,sex:this.sex,citizen_name:this.citizen_name})
      .map(res => res.json())
       .subscribe(data => {
         resolve(data);
         let alert = this.alertCtrl.create({
          subTitle: 'تم حفظ البيانات بنجاح',
        });
        alert.present();
        this.navCtrl.pop();
       }, (err) => {
         reject(err);
       }); 
    })
  }
}
