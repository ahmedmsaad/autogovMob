import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortmessagePage } from './shortmessage';

@NgModule({
  declarations: [
    ShortmessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ShortmessagePage),
  ],
})
export class ShortmessagePageModule {}
