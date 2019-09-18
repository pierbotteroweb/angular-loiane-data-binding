import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.scss']
  styles:[`.highlight{
              font-weight: bold;
              background-color: yellow;
          }`]
})
export class DataBindingComponent implements OnInit {
  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/";
  valorAtual: String = ""
  valorSalvo: string = ""

  isMouseOver: boolean = false

  nomeDoCurso: string = "Angular"


  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert("Botão clicado")
  }

  onKeyUp(e: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>e.target).value

  }


  getValor(){
    return 1
  }

  salvarValor(valor){
    this.valorSalvo=valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
    console.log(this.isMouseOver)
  }

  constructor() { }

  ngOnInit() {
  }

}
