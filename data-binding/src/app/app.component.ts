import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  valor: number = 5;

  deletarCiclo: boolean = false;

  mostrarMenu: boolean = false

  constructor(private authService: AuthService) {}


  ngOnInit() {
    this.authService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  mudarValor(){
    this.valor++
  }

  destruirCiclo(){
    this.deletarCiclo = true
  }

  title = 'data-binding';


}
