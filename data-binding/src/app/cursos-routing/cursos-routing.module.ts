import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from "./cursos-routing.routing.module";

import { CursosRoutingComponent } from "./cursos-routing.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingService } from "./cursos-routing.service";

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
        
        // RouterModule
    ],
    exports: [],
    declarations:[
        CursosRoutingComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosRoutingService]
})

export class CursoRoutingModule {}