import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosRoutingService {

  getCursosRouting(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCursoRouting(id: number){
    let cursos = this.getCursosRouting()
    for (let i=0; i<cursos.length; i++){
      let curso = cursos[i]
      if (curso.id ==id){
        return curso
      }
    }
    return null;
  }

  constructor() { }
}
