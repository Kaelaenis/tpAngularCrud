import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { FindAllv2Component } from './pages/find-allv2/find-allv2.component';
import { TestfindComponent } from './pages/testfind/testfind.component';
import { FindByRefComponent } from './pages/find-by-ref/find-by-ref.component';
import { InsertComponent } from './pages/insert/insert.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { FormsModule } from '@angular/forms';
import { CreateSrvComponent } from './pages/create-srv/create-srv.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAllComponent,
    FindAllv2Component,
    TestfindComponent,
    FindByRefComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    CreateSrvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
