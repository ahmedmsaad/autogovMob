import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import {ReqinfoPage} from '../pages/reqinfo/reqinfo';
import { SearchForReqPage } from '../pages/search-for-req/search-for-req';
import {BuildingLicensePage} from '../pages/building-license/building-license';
import {DocumentsReqPage}  from '../pages/documents-req/documents-req';
import {FeesReqPage} from '../pages/fees-req/fees-req';
import {ReqinfoDetailsPage } from '../pages/reqinfo-details/reqinfo-details';
import {RegisterPage} from '../pages/register/register';
import {CitizenPage} from '../pages/citizen/citizen';
import {CitizenProfilePage} from '../pages/citizen-profile/citizen-profile';
import{UserPage} from '../pages/user/user';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { FeesProvider } from '../providers/fees/fees';
import { ReqinfoDataProvider } from '../providers/reqinfo-data/reqinfo-data';
import {ComplaintsPage} from '../pages/complaints/complaints';
import {SendComplaintPage} from '../pages/send-complaint/send-complaint'
import {SearchComplaintPage} from '../pages/search-complaint/search-complaint';
import {ShortmessagePage} from '../pages/shortmessage/shortmessage'
import {SendreplyPage} from '../pages/sendreply/sendreply'
import {ComplaindetailsPage } from '../pages/complaindetails/complaindetails'

import { HttpModule } from '@angular/http'; 

import{ComplainInfoPage} from '../pages/complain-info/complain-info'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    ReqinfoPage,
    SearchForReqPage,
    BuildingLicensePage,
    DocumentsReqPage,
    FeesReqPage,
    ReqinfoDetailsPage,
    ComplaintsPage,
    SendComplaintPage,
    SearchComplaintPage,
    ComplainInfoPage,
    ShortmessagePage,
    RegisterPage,
    CitizenPage,
    CitizenProfilePage,
    UserPage,
    SendreplyPage,
    ComplaindetailsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    ReqinfoPage,
    SearchForReqPage,
    BuildingLicensePage,
    DocumentsReqPage,
    FeesReqPage,
    ReqinfoDetailsPage,
    ComplaintsPage,
    SendComplaintPage,
    SearchComplaintPage,
    ComplainInfoPage,
    ShortmessagePage,
    RegisterPage,
    CitizenPage,
    CitizenProfilePage,
    UserPage,
    SendreplyPage,
    ComplaindetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    FeesProvider,
    ReqinfoDataProvider,
    Camera
  ]
})
export class AppModule {}
