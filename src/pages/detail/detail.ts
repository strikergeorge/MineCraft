import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  picutreNm;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.picutreNm = this.navParams.get('pictureNm');
    this.picutreNm= "../assets/imgs/" + this.picutreNm + ".jpg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  getPicutreNm(){
    return this.picutreNm;
  }

}
