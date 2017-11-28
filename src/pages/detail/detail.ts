import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as DetailModel from './detail.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  picutreNm: string;
  jsonUrl = '../assets/data/imgUrl.json';
  pictureUrl: string;
  pictrueTitle: string;
  wsUrl:string ='http://localhost:5555/MetaData/employee/{0}/GetUserMetadata';
  message:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.picutreNm = this.navParams.get('pictureNm');
    // this.picutreNm = "../assets/imgs/" + this.picutreNm + ".jpg";
    this.getTotaldata().subscribe(
      res => {
        res.forEach(e => {
          if (this.picutreNm == e.textPara) {
            this.pictureUrl = e.url;
            this.pictrueTitle = e.textPara;
          }
        })
      }
    )
    this.getUserMetadata('myte0133').subscribe(
      res=>{
        this.message=res.EthicMessages[0].MessageTitle;
      }
    )
  };


  getTotaldata(): Observable<DetailModel.imgUrls[]> {
    return this.http.get(this.jsonUrl)
      .map(response => {
        let pictures: DetailModel.imgUrls[] = response.json();
        return pictures;
      });
  }

  getUserMetadata(enterpriseId: string): Observable<DetailModel.UserMetadata> {
    return this.http.get(this.parse(this.wsUrl, [enterpriseId]))
        .map(response => response.json());
}

private parse(url: string, params: string[] = []): string {
  let result: string = url;
  if (params.length > 0) {
      // tslint:disable-next-line:no-unused-variable
      result = url.replace(/\{(\d+)\}/g, function (match: string, current: string): string {
          return params[parseInt(current, 10)] !== undefined ? params[parseInt(current, 10)] : '';
      });
  }
  return result;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  getPicutreNm() {
    return this.picutreNm;
  }

}

