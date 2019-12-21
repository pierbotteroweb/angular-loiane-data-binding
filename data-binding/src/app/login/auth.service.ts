import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'usuario@email.com' &&
    usuario.senha ==='bernardo'){
      this.usuarioAutenticado = true
      this.mostrarMenuEmmiter.emit(true)
      this.router.navigate(['/'])
    } else{
      alert("Usuário ou senha inválidos")
      this.usuarioAutenticado = false
      this.mostrarMenuEmmiter.emit(false)
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
