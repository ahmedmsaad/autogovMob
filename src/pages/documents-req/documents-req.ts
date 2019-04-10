import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
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

  constructor(public navCtrl: NavController,  public dataService:DataProvider ) {
  }

  ionViewDidLoad() {
    this.dataService.load();
  }

  
  

}
