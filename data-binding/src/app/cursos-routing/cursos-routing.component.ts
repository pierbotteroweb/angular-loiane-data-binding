import { Component, OnInit } from '@angular/core';
import { CursosRoutingService } from "./cursos-routing.service";

@Component({
  selector: 'app-cursos-routing',
  templateUrl: './cursos-routing.component.html',
  styleUrls: ['./cursos-routing.component.scss']
})
export class CursosRoutingComponent implements OnInit {

  cursos: any[];

  constructor(private CursosRoutingService: CursosRoutingService ) { }

  ngOnInit() {
    this.cursos = this.CursosRoutingService.getCursosRouting()
  }

}
