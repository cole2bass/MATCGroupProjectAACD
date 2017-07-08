import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage} from "../login/login";
import {FalseUserService} from "../../assets/services/falseUser.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   constructor(public navCtrl: NavController, public navParams: NavParams, private userServ: FalseUserService) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.userServ.arrangeData();
  }
    itemSelected($event, data){
    this.navCtrl.push(LoginPage);
  }

  isLoggedin() {

    if (window.localStorage.getItem('currentuser')) {

      return true;

    }
  }
}
