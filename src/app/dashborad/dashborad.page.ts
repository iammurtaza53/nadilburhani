import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToAttendencePage() {
    this.navCtrl.navigateForward('/attendence');
  }

  goToNewsPage() {
    this.navCtrl.navigateForward('/news');
  }

  goToGalleryPage(){
    this.navCtrl.navigateForward('/gallery')
  }

  goToProfilePage(){
    this.navCtrl.navigateForward('/profile')
  }

}
