import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "../classes/auth";
import { AuthService } from "../services/auth.service";
import { ModalService } from "../services/modal.service";

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private modalService: ModalService) {}


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    try {
      const data: any = await this.authService.getUser().toPromise();
      if (data.role === 'ADMIN') {
        Auth.user = data;
        return true; 
      } else {
        this.modalService.showNotification('Erreur dentifaction', 'Votre role ne vous permet pas.', 10000); 
        this.router.navigate(['/login']);
        return false; 
      }
    } 
    catch (error) {
    
      this.router.navigate(['/login']);
      return false; 
    }
  }
}