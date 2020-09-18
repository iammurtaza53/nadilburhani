import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcheryPageRoutingModule } from './archery-routing.module';

import { ArcheryPage } from './archery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcheryPageRoutingModule
  ],
  declarations: [ArcheryPage]
})
export class ArcheryPageModule {}
