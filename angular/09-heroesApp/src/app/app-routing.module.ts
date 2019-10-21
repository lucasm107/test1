import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  
]

@NgModule({

  imports: [

  ]
})
export class AppRoutingModule { }
