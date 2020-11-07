import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {

  isArchery = false;
  isCricket = false;
 

  constructor() {

  }

  archeryDisplay(event) {
    if (event.detail.value == 'archery') {
      this.isArchery = true
      this.isCricket = false
    }
    else if (event.detail.value == 'cricket') {
      this.isCricket = true
      this.isArchery = false;
    }
  
  }




  ngOnInit() {

  }


}
