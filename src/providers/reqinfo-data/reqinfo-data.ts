import { Injectable } from '@angular/core';

/*
  Generated class for the ReqinfoDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReqinfoDataProvider {

  reqinfo_data:any=[];

  constructor() {
  }
  load(){
    this.reqinfo_data=[{name: "تراخيص بناء "},
    {name: "شكاوى"}];
  }
  addItem(){
    

  }
  editItem(){

  }
  getItem(id){
    
  }
}
