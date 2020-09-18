import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseRidingPageRoutingModule } from './horse-riding-routing.module';

import { HorseRidingPage } from './horse-riding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorseRidingPageRoutingModule
  ],
  declarations: [HorseRidingPage]
})
export class HorseRidingPageModule {}
