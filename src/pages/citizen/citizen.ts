import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CitizenProfilePage } from '../citizen-profile/citizen-profile';
import { ComplaintsPage } from '../complaints/complaints';
import { SendComplaintPage } from '../send-complaint/send-complaint';
import { SearchComplaintPage } from '../search-complaint/search-complaint';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the CitizenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citizen',
  templateUrl: 'citizen.html',
})
export class CitizenPage {
  citizen_national_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.citizen_national_id= navParams.get('citizen');
  }
  goToprofile(){
    this.navCtrl.push(CitizenProfilePage,{national_id:this.citizen_national_id});
  }
  goTosendcomplaint(){
    this.navCtrl.push(SendComplaintPage,{national_id:this.citizen_national_id});
  }
  goTocomplaints(){
    this.navCtrl.push(SearchComplaintPage,{national_id:this.citizen_national_id});
  }
  logout(){
    this.navCtrl.setRoot(WelcomePage);
  }
}
