import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '@app/material/material.module';

import { HeaderComponent } from './header/header.component';
import { UnicornSummaryComponent } from './unicorn-summary/unicorn-summary.component';
import { UnicornHeadComponent } from './unicorn-head/unicorn-head.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    UnicornSummaryComponent,
    UnicornHeadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    UnicornSummaryComponent,
    UnicornHeadComponent
  ]
})
export class SharedModule { }
