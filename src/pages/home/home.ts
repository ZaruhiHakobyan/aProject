import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController, Toast, ToastController} from 'ionic-angular';

import { PostsPage } from '../posts/posts';
import { ProblemsPage } from '../problems/problems';
import { HistoryPage } from '../history/history';
import { UpcomingPage } from '../upcoming/upcoming';

import {AuthService} from '../../services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Storage]
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService,
              private storage: Storage, private toast: ToastController) {}

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

  login(data: {email: string, password: string}): void {
    this.authService.login(data)
      .then(
        (res: {token: string}) => this.storage.ready().then(
          () => this.storage.set('token', res.token).then(
            () => this.storage.get('token').then(
              () => this.goToPosts()
            )
          )
        ),
        (err: any) => this.showToast('Useername or password invalid')
      )
  }

  register(data: {email: string, password: string}): void {
    this.authService.register(data)
      .then(
        (res: any) => this.login(data),
        (err: any) => this.showToast(err.message)
      )
  }

  private showToast(message: string): void {
    let toast: Toast = this.toast.create({
      message: message,
      position: 'middle',
      showCloseButton: true,
      duration: 10000
    });
    toast.present()
  }


}
