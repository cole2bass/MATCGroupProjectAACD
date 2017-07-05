import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";
import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {UserDetailPage} from "../pages/user-detail/user-detail";
import {UserHomePage} from "../pages/user-home/user-home";
import {SearchPage} from "../pages/search/search";
import {FalseUserService} from "../assets/services/falseUser.service"


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MovieDetailPage,
    SearchPage,
    UserDetailPage,
    UserHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MovieDetailPage,
    SearchPage,
    UserDetailPage,
    UserHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FalseUserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
