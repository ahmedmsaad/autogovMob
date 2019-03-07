import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReqinfoPage } from './reqinfo';

@NgModule({
  declarations: [
    ReqinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReqinfoPage),
  ],
})
export class ReqinfoPageModule {}
