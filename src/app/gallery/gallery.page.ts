import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  img: any;

  sliderOpts = {
    zoom: false,
    sliderPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };
  constructor(private modalController: ModalController) {

  }

  openPreview() {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: this.img
      }
    }).then(modal => modal.present());
  }

  ngOnInit() {
  }

}

