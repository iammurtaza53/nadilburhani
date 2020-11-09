import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {

  isArchery = false;
  isCricket = false;
  isFootball = false;
  isHorse = false;

  isItsnumber = false;
 

  constructor() {

  }

  archeryDisplay(event) {
    if (event.detail.value == 'archery') {
      this.isCricket = false;
      this.isHorse = false;
      this.isArchery = true;
      this.isFootball = false;
    }
    else if (event.detail.value == 'cricket') {
      this.isCricket = true;
      this.isHorse = false;
      this.isArchery = false;
      this.isFootball = false;
    }
    else if (event.detail.value == 'football') {
      this.isCricket = false;
      this.isFootball = true;
      this.isArchery = false;
      this.isHorse = false;
    }
    else if (event.detail.value == "horse_riding") {
      this.isCricket = false;
      this.isFootball = false;
      this.isArchery = false;
      this.isHorse = true;
    }
  }

  itsDisplay(event) {
    if (event.detail.value == 'yes') {
      this.isItsnumber = true;
    }
    else if (event.detail.value == 'no') {
      this.isItsnumber = false;
    }
  }




  ngOnInit() {

  }


}
