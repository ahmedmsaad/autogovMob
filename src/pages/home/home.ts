import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReqinfoPage} from '../reqinfo/reqinfo'; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoReqInfo(){
    this.navCtrl.push(ReqinfoPage)
  }
}
