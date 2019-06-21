import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitizenPage } from './citizen';

@NgModule({
  declarations: [
    CitizenPage,
  ],
  imports: [
    IonicPageModule.forChild(CitizenPage),
  ],
})
export class CitizenPageModule {}
