import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyMoviesPage} from "../my-movies/my-movies";
import {UsersSearchPage} from "../users-search/users-search";
import {MoviesSearchPage} from "../movies-search/movies-search";
import {SearchPage} from "../search/search";

/**
 * Generated class for the UserHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserHomePage');
  }

  itemSelected(){
    this.navCtrl.push(SearchPage);
  }


}
