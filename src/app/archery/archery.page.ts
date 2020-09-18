import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archery',
  templateUrl: './archery.page.html',
  styleUrls: ['./archery.page.scss'],
})
export class ArcheryPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    loop: true,
  };

  constructor() { }


  ngOnInit() {
  }


  

}
