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

  selectedFile: File
  
  public imagePath;
  imgURL: any;
  public message: string;
 

  title = 'angularlaraveluploadimage';
  filedata:File;
    fileEvent(e){
        this.filedata = e.target.files[0];
        var reader = new FileReader();
        this.imagePath = e.target.files;
        reader.readAsDataURL(e.target.files[0]); 
        reader.onload = (_event) => { 
          this.imgURL = reader.result; 
        }

        
    }

  constructor(private camera:Camera, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.CustomerNationalID= navParams.get('national_id');

  }

  sendcomplaint() {
    console.log(this.filedata);
    if(this.complaint!=="" ){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        var myFormData = new FormData();

        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        myFormData.append('filefield', this.filedata);
        myFormData.append('citizen_national_id', this.CustomerNationalID);
        myFormData.append('complain_content', this.complaint);

        this.http.post(apiKey + 'api/makeComplain',myFormData)
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
   
  }
}
