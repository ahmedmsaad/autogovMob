import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

/**
 * Generated class for the SendComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {WelcomePage} from '../welcome/welcome'
import { CitizenPage } from '../citizen/citizen';


@IonicPage()
@Component({
  selector: 'page-send-complaint',
  templateUrl: 'send-complaint.html',
})
export class SendComplaintPage {
  CustomerNationalID:any;
  complaint:string="";
  image:any;
  constructor(private camera:Camera, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.CustomerNationalID= navParams.get('national_id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendComplaintPage');
  }
  sendcomplaint() {
    console.log(this.CustomerNationalID);
    if(this.complaint!=="" ){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(apiKey + 'api/makeComplain', { citizen_national_id:this.CustomerNationalID,complain_content:this.complaint })
          .map(res => res.json())
          .subscribe(data => {
            console.log(data)
            resolve(data);
            let alert = this.alertCtrl.create({
              
              subTitle: 'تم إرسال الشكوى بنجاح',
            });
            alert.present();
            this.navCtrl.pop();
          }, (err) => {
            reject(err);
          });
      });
    }else{
      let alert = this.alertCtrl.create({
        subTitle: 'تأكد من ادخال البيانات المطلوبه لتقديم الشكوى ',
      });
      alert.present();
    }
   /**/
  }
  getCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
