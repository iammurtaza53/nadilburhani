import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
