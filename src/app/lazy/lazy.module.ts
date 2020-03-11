import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  declarations: [LazyComponent],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'admin-page' }
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule]
})
export class LazyModule {}