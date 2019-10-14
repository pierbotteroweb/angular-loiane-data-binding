import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro:any ={
    titulo:"Learning JavaScript Data Structures and Algorithms",
    rating:4.5685,
    numeroPaginas: 314,
    preco:44.99,
    dataLancamento: new Date(2016, 5,23),
    url: 'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms/dp/1783554878'    
  };

  livros: string[] = ['Java', 'Angular 2']

  filtro: string

  constructor() { }

  addCurso(val){
    this.livros.push(val)
  }

  obterCursos(){
    
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim()===""){
      return this.livros;
    }

    return this.livros.filter((v)=>{
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase())){
      return true
    }
    return false
    })
  }

  ngOnInit() {
  }

}
