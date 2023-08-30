import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(): void {
    if(sessionStorage.getItem('Token')){
      this.isAuthenticated = true;
    }
    else{
      this.isAuthenticated = false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  authCheck(){
    if (sessionStorage.getItem('Token')){
      return true
    }
    else{
      return false
    }
  }
  isAuthenticated:boolean = this.authCheck()

  private AuthStatus = new BehaviorSubject<boolean>(this.isAuthenticated)

  currentStatus = this.AuthStatus.asObservable()

  authentication(WildCard:boolean){
    this.AuthStatus.next(this.authCheck())
  }

  constructor() { }
}
