import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeworkDescriptionComponent } from './homework-description/homework-description.component';
import { Rendu1Component } from './rendu1/rendu1.component';
import { Rendu2Component } from './rendu2/rendu2.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

 
const routes: Routes = [ 
  {path : '' , redirectTo : 'homework' , pathMatch : 'full' },
  {path: 'homework',component : HomeworkDescriptionComponent },
  {path: 'Rendu1',component : Rendu1Component },
  { path: 'Atelier3', component: Rendu2Component },
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
