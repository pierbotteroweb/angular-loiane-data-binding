import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription

  constructor(
    private route: ActivatedRoute,    
    private router: Router,    
    private alunosService: AlunosService
  ) { }

  ngOnInit() {

    console.log('ngOnInit: AlunoDetalheComponent')
    // this.inscricao = this.route.params.subscribe(
    //   (params: any)=>{
    //     let id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id)
    //   }
    // )

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno})=>{
        console.log("Recebendo o obj Aluno do resolver")
        this.aluno = info.aluno
      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

}
