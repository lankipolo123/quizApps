import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandyPage } from './landy.page';

const routes: Routes = [
  {
    path: '',
    component: LandyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandyPageRoutingModule {}
