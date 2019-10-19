import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosRoutingService } from "../cursos-routing.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit  {

  id: number
  inscricao: Subscription
  curso: any

  constructor( private route: ActivatedRoute,
                private cursosRoutingService: CursosRoutingService,
                private router: Router
                ) {
    // console.log(this.route)
    // this.id = this.route.snapshot.params.id
   }

  ngOnInit() {

    // this.inscricao= this.route.params.subscribe((params:any)=>{
    //   this.id = params.id
    // })

    this.inscricao= this.route.params.subscribe((params:any)=>{
       this.id = params.id

       this.curso = this.cursosRoutingService.getCursoRouting(this.id)

       console.log(this.id)

       if(this.curso==null){
         this.router.navigate(['/naoEncontrado'])
       }


     })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe()
    
  }

}
