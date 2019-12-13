import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/aluno-deactivate.guard';

const alunosRoute = [
    {path: '', component: AlunosComponent,
    canActivateChild:[AlunosGuard], 
    children: [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent,
          canDeactivate: [AlunosDeactivateGuard]
        }

    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoute)],
    exports: [RouterModule]
})


export class AlunosRoutingModule {}