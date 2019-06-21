import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaindetailsPage } from './complaindetails';

@NgModule({
  declarations: [
    ComplaindetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaindetailsPage),
  ],
})
export class ComplaindetailsPageModule {}
