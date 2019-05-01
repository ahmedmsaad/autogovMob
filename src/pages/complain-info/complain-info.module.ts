import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainInfoPage } from './complain-info';

@NgModule({
  declarations: [
    ComplainInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainInfoPage),
  ],
})
export class ComplainInfoPageModule {}
