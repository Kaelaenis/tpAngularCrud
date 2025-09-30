import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { FindAllv2Component } from './pages/find-allv2/find-allv2.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAllComponent,
    FindAllv2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
