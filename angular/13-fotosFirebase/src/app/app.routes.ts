import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { Carga2Component } from './components/carga2/carga2.component';

const Rutas: Routes = [
    { path: 'fotos', component: FotosComponent},
    { path: 'carga', component: CargaComponent},
    { path: 'carga2', component: Carga2Component},
    { path: '**', pathMatch: 'full', redirectTo: 'fotos'},
];

export const APP_ROUTES = RouterModule.forRoot( Rutas );
