import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbcdPageRoutingModule } from './abcd-routing.module';

import { AbcdPage } from './abcd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbcdPageRoutingModule
  ],
  declarations: [AbcdPage]
})
export class AbcdPageModule {}
