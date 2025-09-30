import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { FindAllv2Component } from './pages/find-allv2/find-allv2.component';
import { TestfindComponent } from './pages/testfind/testfind.component';
import { FindByRefComponent } from './pages/find-by-ref/find-by-ref.component';
import { InsertComponent } from './pages/insert/insert.component';

const routes: Routes = [
  {path: 'articles', component: FindAllComponent},
  {path: 'articlesv2', component: FindAllv2Component},
  {path: 'testfind/:full', component: TestfindComponent},
  {path: 'article/:ref', component: FindByRefComponent},
  {path: 'insert', component: InsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
