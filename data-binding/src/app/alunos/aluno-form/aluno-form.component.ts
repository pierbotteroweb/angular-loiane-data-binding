import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate{

  aluno: any;
  inscricao: Subscription
  private formMudou:boolean

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  onInput(){
    this.formMudou=true
    console.log("mudou")

  }

  podeMudarRota(){
    if(this.formMudou){
      confirm("Tem certeza que deseja sair dessa página?")
    }

    return true

  }

  podeDesativar(){
    this.podeMudarRota()
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id)
        console.log(this.aluno)

        if(this.aluno === null){
          this.aluno = {}
        }
      }
    )
  }

}
