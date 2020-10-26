import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-horse-riding',
  templateUrl: './horse-riding.page.html',
  styleUrls: ['./horse-riding.page.scss'],
})
export class HorseRidingPage implements OnInit {
  slideOpts = {
    initialSlide: 3,
    loop: true,
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/registration-form');
  }

}
