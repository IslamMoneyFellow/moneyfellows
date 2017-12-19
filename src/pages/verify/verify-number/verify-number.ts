import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verify-number',
  templateUrl: 'verify-number.html',
})
export class VerifyNumberPage {
  container: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  onPoping(){
    this.navCtrl.pop();
  }
}


