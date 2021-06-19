import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OutcomeComponent } from './components/outcome/outcome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'outcomes',component:OutcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
