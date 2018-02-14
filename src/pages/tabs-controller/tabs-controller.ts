import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ELearningPage } from '../e-learning/e-learning';
import { CoursePage } from '../course/course';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ELearningPage;
  tab2Root: any = CoursePage;
  tab3Root: any = ContactPage;
  constructor(public navCtrl: NavController) {
  }
  
}
