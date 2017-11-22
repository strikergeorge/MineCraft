import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Page1Page } from "../page1/page1";
import { Page2Page } from "../page2/page2";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav=Nav;
  rootPage: any = Page1Page;
  pages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController) {
    this.pages = [{ title: 'Page One', component: Page1Page },
    { title: 'Page Two', component: Page2Page }];
  }
  openPage(page) {
    // this.navCtrl.push(page.component);
    this.navCtrl.setRoot(page.component);
  }
}
