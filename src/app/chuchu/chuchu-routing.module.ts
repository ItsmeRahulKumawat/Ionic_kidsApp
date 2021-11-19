import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuchuPage } from './chuchu.page';

const routes: Routes = [
  {
    path: '',
    component: ChuchuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuchuPageRoutingModule {}
