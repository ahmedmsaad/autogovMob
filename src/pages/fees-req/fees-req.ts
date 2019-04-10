import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FeesProvider } from '../../providers/fees/fees';

/**
 * Generated class for the FeesReqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fees-req',
  templateUrl: 'fees-req.html',
})
export class FeesReqPage {

  constructor(public navCtrl: NavController,public FeesService :FeesProvider) {
  }

  ionViewDidLoad() {
    this.FeesService.load();

  }

}
