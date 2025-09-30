import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './pages/find-all/find-all.component';

const routes: Routes = [
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'articles', component: FindAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
