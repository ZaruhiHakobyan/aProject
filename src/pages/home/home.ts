import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostsPage } from '../posts/posts';
import { ProblemsPage } from '../problems/problems';
import { HistoryPage } from '../history/history';
import { UpcomingPage } from '../upcoming/upcoming';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToPosts(){
    this.navCtrl.push(PostsPage);
  }

  goToExistingProblems(){
    this.navCtrl.push(ProblemsPage);
  }

  goToUpcomingProblems(){
    this.navCtrl.push(UpcomingPage);
  }

  goToHistory(){
    this.navCtrl.push(HistoryPage);
  }


}
