import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProductsComponentComponent } from './products-component/products-component.component';
import { FormsModule } from '@angular/forms';
 import { NavbarComponent } from './navbar/navbar.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ArticlesComponent } from './articles/articles.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { Rendu1Component } from './rendu1/rendu1.component';
import { HomeworkDescriptionComponent } from './homework-description/homework-description.component';
import { Rendu2Component } from './rendu2/rendu2.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
     ProductsComponentComponent,
    NavbarComponent,
    OffresEmploisComponent,
    ArticlesComponent,
    TemplateDrivenFormComponent,
    Rendu1Component,
    HomeworkDescriptionComponent,
    Rendu2Component ,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
