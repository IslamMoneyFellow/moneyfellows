import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerifyNumberPage } from '../verify/verify-number/verify-number'



@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSendCode() {
    this.navCtrl.push(VerifyNumberPage)
  }

}
