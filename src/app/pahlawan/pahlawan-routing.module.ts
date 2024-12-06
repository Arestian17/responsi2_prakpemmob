import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PahlawanPage } from './pahlawan.page';

const routes: Routes = [
  {
    path: '',
    component: PahlawanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PahlawanPageRoutingModule {}
