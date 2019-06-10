import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShortmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shortmessage',
  templateUrl: 'shortmessage.html',
})
export class ShortmessagePage {
  message:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.message=navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShortmessagePage');
  }

}
