import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
  ],
})
export class DetailPageModule {}
