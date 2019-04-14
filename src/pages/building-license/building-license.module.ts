import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingLicensePage } from './building-license';

@NgModule({
  declarations: [
    BuildingLicensePage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingLicensePage),
  ],
})
export class BuildingLicensePageModule {}
