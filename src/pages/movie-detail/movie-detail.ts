import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the MovieDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  sampleMovie: any;
  imageBaseUrl: string = "https://image.tmdb.org/t/p/w200";
  imageUrl: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.tempMovieService().subscribe(response => {
      this.sampleMovie = JSON.parse(response.text());
      this.imageUrl = this.imageBaseUrl + this.sampleMovie.poster_path;
      console.log(this.sampleMovie);
    })
  }

  tempMovieService(){
    let url: string = "https://api.themoviedb.org/3/movie/76341?api_key=9d1d4c863da80cfbbfdfc5d7b3c456b0";
    return this.http.get(url);
  }

}
