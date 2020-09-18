import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcheryPage } from './archery.page';

const routes: Routes = [
  {
    path: '',
    component: ArcheryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcheryPageRoutingModule {}
