import{Component} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{User} from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth/auth";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user = {} as User;
  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  async register(user:User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      alert('Registration has been completed successfully');
      console.log(result)
    }
    catch(e) {
      console.error(e)
    }
  }
}