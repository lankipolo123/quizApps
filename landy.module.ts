import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandyPageRoutingModule } from './landy-routing.module';

import { LandyPage } from './landy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandyPageRoutingModule
  ],
  declarations: [LandyPage]
})
export class LandyPageModule {}
