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

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    try {
      const data: any = await this.authService.getUser().toPromise();
      if (data) {
        Auth.user = data;
        return true; 
      } else {
        this.router.navigate(['/login']);
        return false; 
      }
    } catch (error) {
    
      this.router.navigate(['/login']);
      return false; 
    }
  }
}