import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PahlawanPageRoutingModule } from './pahlawan-routing.module';

import { PahlawanPage } from './pahlawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PahlawanPageRoutingModule
  ],
  declarations: [PahlawanPage]
})
export class PahlawanPageModule {}
