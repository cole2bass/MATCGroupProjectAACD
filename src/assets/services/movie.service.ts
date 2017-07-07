import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs";

@Injectable()
export class MovieService {

  //Unique Movie Url has https://api.themoviedb.org/3/movie/{movie_id}?api_key={apiKey}
  private specificMovieUrl = "https://api.themoviedb.org/3/movie/"

  private apiKey: string = "9d1d4c863da80cfbbfdfc5d7b3c456b0";


  constructor(private http: Http) {}

}
