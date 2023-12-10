import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "../classes/auth";
import { AuthService } from "../services/auth.service";
import { MyResponse } from "../models/response";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.getUser().subscribe({
        next: (res: MyResponse) => {
          Auth.user = res.data!;
        },
        error: (error) => {
          this.router.navigate(['/login']);
        },
      });
      return true;
  }
  
}
