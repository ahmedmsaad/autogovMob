import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {WelcomePage} from '../welcome/welcome'
import { AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

/**
 * Generated class for the SendreplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendreply',
  templateUrl: 'sendreply.html',
})
export class SendreplyPage {
  Complaint:any;
  reply:any;
  userid:any;
  Complaintimage:any;
  
  public imagePath;
  imgURL:any;
  public message: string;
  imgUR:any;
  filedata:File;
  constructor(private camera:Camera, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.Complaint=navParams.get('complaint');
    this.userid=navParams.get('user');
    this.Complaintimage=apiKey+'api/getImageComplain/'+this.Complaint.id;
  }
  
    fileEvent(e){
        this.filedata = e.target.files[0];
        var reader = new FileReader();
        this.imagePath = e.target.files;
        reader.readAsDataURL(e.target.files[0]); 
        reader.onload = (_event) => { 
          this.imgURL = reader.result; 
        }

        
    }
  sendreply(){

        if(this.reply!=null ){
          return new Promise((resolve, reject) => {
            let headers = new Headers();
            var myFormData = new FormData();

            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            myFormData.append('filefield', this.filedata);
            myFormData.append('user_id', this.userid);
            myFormData.append('reply_content', this.reply);
            myFormData.append('complain_id', this.Complaint.id );

            this.http.post(apiKey + 'api/makeRep', myFormData)
              .map(res => res.json())
              .subscribe(data => {
             
                resolve(data);
                let alert = this.alertCtrl.create({
                  
                  subTitle: 'تم الرد بنجاح',
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
            buttons: ['موافق']
          });
          alert.present();
        }
      /**/
  }
  getimage(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiKey+'api/getImageComplain/'+this.Complaint.id)
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
  }
}
