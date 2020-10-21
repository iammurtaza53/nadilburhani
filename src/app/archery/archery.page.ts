import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-archery',
  templateUrl: './archery.page.html',
  styleUrls: ['./archery.page.scss'],
})
export class ArcheryPage implements OnInit {




  slideOpts = {
    SliderPerView: 1.5,
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
