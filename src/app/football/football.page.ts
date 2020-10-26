import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
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
