import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AlunosGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("Guarda de rota filha - alunos")
            console.log(route)
            console.log(state.url)
            if(state.url.includes("2/editar")){
              alert("Usuário sem acesso")
              return false
            }
        return true;
    }
}