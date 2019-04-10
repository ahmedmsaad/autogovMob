import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReqinfoPage} from '../reqinfo/reqinfo'; 
import { SearchForReqPage } from '../search-for-req/search-for-req';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoReqInfo(){
    console.log("done");
    this.navCtrl.push(ReqinfoPage)
  }
  gotoSearchForReq(){
    console.log("done");
    this.navCtrl.push(SearchForReqPage)
  }
}
