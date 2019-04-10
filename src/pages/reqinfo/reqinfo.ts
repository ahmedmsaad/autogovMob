import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildingLicensePage } from '../building-license/building-license';
import {ReqinfoDataProvider} from'../../providers/reqinfo-data/reqinfo-data';
/**
 * Generated class for the ReqinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reqinfo',
  templateUrl: 'reqinfo.html',
})
export class ReqinfoPage {

  constructor(public navCtrl: NavController, public ReqinfoService :ReqinfoDataProvider) {
  }

  ionViewDidLoad() {
    this.ReqinfoService.load();
  }
  Choice( id)
  {
    console.log("done");
    if(id.is("تراخيص بناء "))
    {
      this.navCtrl.push(BuildingLicensePage)

    }else
    {

    }
  }
  gotoBuildingLicense(){
    console.log("done");
    this.navCtrl.push(BuildingLicensePage)
  }
  

}
