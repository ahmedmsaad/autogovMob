import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendComplaintPage } from './send-complaint';

@NgModule({
  declarations: [
    SendComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(SendComplaintPage),
  ],
})
export class SendComplaintPageModule {}
