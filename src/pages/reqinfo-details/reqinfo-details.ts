import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentsReqPage } from '../documents-req/documents-req';
import { FeesReqPage } from '../fees-req/fees-req';

/**
/**
 * Generated class for the ReqinfoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reqinfo-details',
  templateUrl: 'reqinfo-details.html',
})
export class ReqinfoDetailsPage {
  request:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.request= navParams.get('req');
    console.log(this.request.request_name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingLicensePage');
  }
  gotoDocumentsReq()
  {
    console.log("done");
    this.navCtrl.push(DocumentsReqPage,{req:this.request})
  }
  gotoFeesReq()
  {
    console.log("done");
    this.navCtrl.push(FeesReqPage,{req:this.request})
  }

}
