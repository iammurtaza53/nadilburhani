import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
