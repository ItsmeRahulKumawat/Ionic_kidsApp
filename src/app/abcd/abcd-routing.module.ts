import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbcdPage } from './abcd.page';

const routes: Routes = [
  {
    path: '',
    component: AbcdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbcdPageRoutingModule {}
