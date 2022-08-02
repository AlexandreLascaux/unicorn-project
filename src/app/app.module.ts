import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUnicornComponent } from './add-unicorn/add-unicorn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoveUnicornComponent } from './love-unicorn/love-unicorn.component';
import { UnishopComponent } from './unishop/unishop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUnicornComponent,
    LoveUnicornComponent,
    UnishopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
