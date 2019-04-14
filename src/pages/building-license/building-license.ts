import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentsReqPage } from '../documents-req/documents-req';
import { FeesReqPage } from '../fees-req/fees-req';

/**
 * Generated class for the BuildingLicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building-license',
  templateUrl: 'building-license.html',
})
export class BuildingLicensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingLicensePage');
  }
  gotoDocumentsReq()
  {
    console.log("done");
    this.navCtrl.push(DocumentsReqPage);
  }
  gotoFeesReq()
  {
    console.log("done");
    this.navCtrl.push(FeesReqPage);
  }

}
