import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendencePageRoutingModule } from './attendence-routing.module';

import { AttendencePage } from './attendence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AttendencePageRoutingModule
  ],
  declarations: [AttendencePage]
})
export class AttendencePageModule {}
