import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PostService} from "../../services/post.service";
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";

interface IPost {
  _id: string;
  title: string;
  body: string;
  is_voted: boolean;
}

@Component({
  selector: 'page-problems',
  templateUrl: 'problems.html'
})
export class ProblemsPage {
  public posts: Array<IPost> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private postService: PostService, private authService: AuthService) {}

  ionViewDidLoad() {
    this.postService.allPosts.then(
      (res: {posts: Array<IPost>}) => this.posts = res.posts,
    )
  }

  public vote(post: IPost): void {
    this.postService.voteForPost(post._id).then(
      (res) => console.log(res)
    )
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
    });
    return true;
  }

}
