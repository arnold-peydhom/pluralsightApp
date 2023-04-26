import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './product-list/products.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: HomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch:'full'},
      {path: '**', redirectTo: 'welcome',pathMatch:'full'}
    ]),
    ProductsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
