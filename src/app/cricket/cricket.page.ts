import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.page.html',
  styleUrls: ['./cricket.page.scss'],
})
export class CricketPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    loop: true,
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  
  goToRegisterPage() {
    this.navCtrl.navigateForward('/registration-form');
  }

}
