import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerifyPage } from '../verify/verify'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAction() {
    this.navCtrl.push(VerifyPage);
  }


}
