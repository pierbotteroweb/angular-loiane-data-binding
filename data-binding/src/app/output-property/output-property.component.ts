import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter()

  // @ViewChild('campoInput', {static: false}) valorCampoInput: HTMLElement;
  @ViewChild('campoInput', {static: false}) valorCampoInput: ElementRef;


  incrementa(){
    console.log(this.valorCampoInput.nativeElement.value)
    // this.valor++
    this.valorCampoInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit() {
  }

}
