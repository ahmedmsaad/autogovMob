import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data:any=[];

  constructor() {
  }
  load(){
    this.data=[{name: "Doc1"},
    {name: "Doc2"}];
  }
  addItem(){
    

  }
  editItem(){

  }
  getItem(id){
    
  }

}
