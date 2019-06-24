import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DocumentsReqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents-req',
  templateUrl: 'documents-req.html',
})
export class DocumentsReqPage {
  requestid:any;
  documents:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage: Storage , public http: Http) {
    this.requestid = navParams.get('req');
    this.requestid =this.requestid.id;
    console.log(this.requestid)
    this.ListDocOfReqByID().then((data) => {
      this.documents = data;
      this.documents=this.documents.documents;
      console.log(this.documents)
    })
  }
  
  ListDocOfReqByID(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(apiKey+'api/documents/get/'+this.requestid)
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
    })
}
  
  

}
