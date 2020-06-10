import { Injectable } from '@angular/core';
import { adminFull } from './models/admin-full.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  show = false;
  
  login(){
    this.show=true;
    // console.log(this.show)
    this.router.navigate(['/dashboard']);
  }

  user(){
    this.show=true;
    this.router.navigate(['/username'])
  }

  logout(user: string){
    this.show=false;
    localStorage.clear();
      return this.show;
  }

  constructor(private router:Router) { }
  public admins:adminFull[] = [{

    firstName: 'John',
   
    lastName: 'Doe',
   
    email: 'john.doe@email.com',
   
    password: '1234567890'
   
    }, {
   
    firstName: 'Kylie',
   
    lastName: 'Johnson',
   
    email: 'kylie.johnson@email.com',
   
    password: '0987654321'
   
    }];

}
