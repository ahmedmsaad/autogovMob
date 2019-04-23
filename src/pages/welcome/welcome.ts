import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ComplaintsPage } from '../complaints/complaints';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToTransactions(){
    this.navCtrl.push(HomePage);
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  gotoComplain(){
    this.navCtrl.push(ComplaintsPage);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  

}
