import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketPageRoutingModule } from './cricket-routing.module';

import { CricketPage } from './cricket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CricketPageRoutingModule
  ],
  declarations: [CricketPage]
})
export class CricketPageModule {}
