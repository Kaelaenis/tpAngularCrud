import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { FindAllv2Component } from './pages/find-allv2/find-allv2.component';

const routes: Routes = [
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'articles', component: FindAllComponent},
  {path: 'articlesv2', component: FindAllv2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
