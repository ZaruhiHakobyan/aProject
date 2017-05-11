import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";

/*
  Generated class for the Upcoming page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html'
})
export class UpcomingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
      return false;
    });
    return true;
  }

}
