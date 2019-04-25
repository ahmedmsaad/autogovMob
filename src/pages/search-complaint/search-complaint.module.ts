import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchComplaintPage } from './search-complaint';

@NgModule({
  declarations: [
    SearchComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchComplaintPage),
  ],
})
export class SearchComplaintPageModule {}
