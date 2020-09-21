import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
