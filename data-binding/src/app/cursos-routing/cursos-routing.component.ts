import { Component, OnInit } from '@angular/core';
import { CursosRoutingService } from "./cursos-routing.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-routing',
  templateUrl: './cursos-routing.component.html',
  styleUrls: ['./cursos-routing.component.scss']
})
export class CursosRoutingComponent implements OnInit {

  cursos: any[];
  pagina:number;
  inscricao: Subscription

  constructor(
    private CursosRoutingService: CursosRoutingService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.cursos = this.CursosRoutingService.getCursosRouting()
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any)=>{
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }


  proximaPagina(){
    // this.pagina++
    this.router.navigate(['/cursos'],
        {queryParams: {'pagina': ++this.pagina}})
  }
}
