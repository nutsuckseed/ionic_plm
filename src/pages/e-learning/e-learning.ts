import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';

@Component({
  selector: 'page-e-learning',
  templateUrl: 'e-learning.html'
})
export class ELearningPage {

  constructor(public navCtrl: NavController) {
  }
  goToCourse(params){
    if (!params) params = {};
    this.navCtrl.push(CoursePage);
  }
}
