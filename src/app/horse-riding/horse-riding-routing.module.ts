import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseRidingPage } from './horse-riding.page';

const routes: Routes = [
  {
    path: '',
    component: HorseRidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseRidingPageRoutingModule {}
