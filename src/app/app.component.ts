import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ELearningPage } from '../pages/e-learning/e-learning';
import { BannerPage } from '../pages/banner/banner';
import { NewsPage } from '../pages/news/news';
import { DocumentsPage } from '../pages/documents/documents';
import { CoursePage } from '../pages/course/course';
import { AboutPage } from '../pages/about/about';
import { UsabilityPage } from '../pages/usability/usability';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToELearning(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ELearningPage);
  }goToBanner(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BannerPage);
  }goToNews(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NewsPage);
  }goToDocuments(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DocumentsPage);
  }goToCourse(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CoursePage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToUsability(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UsabilityPage);
  }goToFaq(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FaqPage);
  }goToContactus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactusPage);
  }
}
