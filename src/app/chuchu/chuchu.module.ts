import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuchuPageRoutingModule } from './chuchu-routing.module';

import { ChuchuPage } from './chuchu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuchuPageRoutingModule
  ],
  declarations: [ChuchuPage]
})
export class ChuchuPageModule {}
