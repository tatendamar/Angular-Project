import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from './auth/+state/auth.selectors';

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

  constructor(private tokenStorageService: TokenStorageService,  private store: Store) { }

  ngOnInit(): void {
this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  logout(): void {
    this.tokenStorageService.signOut();
  }
}
