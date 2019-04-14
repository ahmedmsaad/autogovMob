import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentsReqPage } from './documents-req';

@NgModule({
  declarations: [
    DocumentsReqPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentsReqPage),
  ],
})
export class DocumentsReqPageModule {}
