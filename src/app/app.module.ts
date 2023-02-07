import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProductsComponentComponent } from './products-component/products-component.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ArticlesComponent } from './articles/articles.component';
 
@NgModule({
  declarations: [
    AppComponent,
     ProductsComponentComponent,
    NavbarComponent,
    OffresEmploisComponent,
    ArticlesComponent 
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
