import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosRoutingComponent } from './cursos-routing/cursos-routing.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursoDetalheComponent } from './cursos-routing/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from "./cursos-routing/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: './cursos-routing/cursos-routing.module#CursoRoutingModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos',
        loadChildren: './alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
        // canActivateChild: [AlunosGuard]
    },
    // { path: 'cursos', component: CursosRoutingComponent},
    // { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}