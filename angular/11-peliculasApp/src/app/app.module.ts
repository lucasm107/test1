import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

import { PeliculasService } from "./services/peliculas.service";

import { AppComponent } from './app.component';
import { DemoComponent } from "./components/demo/demo.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpClient
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
