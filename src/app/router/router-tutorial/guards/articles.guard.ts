import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private authService: AuthService
    ){

    }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            //check user return true
            return this.authService.currentUser.pipe(map(user => !!user)); // !!user = true
            //return of(false);
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            const targetSlug = childRoute.params['slug'];
            if(!targetSlug) {
                return of(false);
            }
            return this.authService.currentUser.pipe(map(user => user.articles.includes(targetSlug))); //include return boolean check slug in article data
    }

    //use to load module
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> {
            return this.authService.currentUser.pipe(map(user => !!user));
    }

}
