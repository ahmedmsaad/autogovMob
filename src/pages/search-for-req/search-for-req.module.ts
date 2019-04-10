import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchForReqPage } from './search-for-req';

@NgModule({
  declarations: [
    SearchForReqPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchForReqPage),
  ],
})
export class SearchForReqPageModule {}
