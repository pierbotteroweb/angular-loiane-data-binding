import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CursosGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}