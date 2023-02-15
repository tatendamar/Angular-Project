import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from './auth/+state/auth.selectors';
import { Router } from '@angular/router';
import { AuthStateInterface } from './auth/types/authState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn: any;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

   isLoggedIn$: Observable<boolean>;

  constructor(private tokenStorageService: TokenStorageService,  private store: Store<AuthStateInterface>,  private router: Router) { }

  ngOnInit(): void {

       this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));

       if(this.isLoggedIn$){
          this.isLoggedIn = !!this.tokenStorageService.getToken();
           this.router.navigate(['/home'])
       }


  }

  logout(): void {
    this.tokenStorageService.signOut();
  }
}
