import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosRoutingComponent } from './cursos-routing/cursos-routing.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosRoutingComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)