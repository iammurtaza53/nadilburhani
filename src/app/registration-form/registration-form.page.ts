import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';



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

  horse1 = false;
  horse2 = false;
  horse3 = false;
  horse4 = false;
  horse5 = false;
  horse6 = false;

  

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

  // horseDisplay(event) {
  //   if (event.detail.value == "header1"){
  //   this.horse1 = true;
  //   this.horse2 = false;
  //   this.horse3 = false;
  //   }
  // }

  // ionOnChnagw(value){
  //   value is in group 1

  // }



  ngOnInit() {

  }


}
