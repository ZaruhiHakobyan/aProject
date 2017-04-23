import { Component } from '@angular/core';

import {NavController, Toast, ToastController} from 'ionic-angular';
import {PostService} from "../../services";
import {PostsPage} from "../posts/posts";
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public submitted: boolean = false;
  public form: FormGroup = (new FormBuilder()).group({
    'title': ['', Validators.required],
    'body': ['', Validators.required]
  });

  constructor(public navCtrl: NavController, private postService: PostService, private toast: ToastController) {}

  public submitPost(data: {title: string, body: string}): void {
    this.submitted = true;
    if(!this.form.valid) return;
    this.postService.submit(data)
      .then(
        (res) => {
          this.navCtrl.push(PostsPage);
          this.showToast('Successfully submitted');
        },
        (err) => this.showToast('Something went wrong')
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
