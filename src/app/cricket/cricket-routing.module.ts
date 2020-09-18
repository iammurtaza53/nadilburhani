import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketPage } from './cricket.page';

const routes: Routes = [
  {
    path: '',
    component: CricketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketPageRoutingModule {}
