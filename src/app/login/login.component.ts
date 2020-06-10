import { Component, OnInit,Output,EventEmitter, InjectDecorator, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../auth.service';
import { adminFull } from '../models/admin-full.model';
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailInput;
  userInput;
  saveUser;
  createNewUser: boolean = false;
  show=this.Auth.show;
  @Output() send = new EventEmitter<string>();
  constructor(private router:Router, private Auth:AuthService,private api:DataService) {}  

  ngOnInit(){
    Object.keys(localStorage).forEach(function(key){})
    return this.Auth.show;
  }
  admin=this.Auth.admins;
  submitButton(form:NgForm){
    this.admin.find(adminValue=>{
      if(form.value.email === adminValue.email && form.value.password === adminValue.password) {
        this.Auth.login();
        this.saveUser=form.value.email;
        localStorage.setItem('email',(this.saveUser));
        // console.log(this.saveUser)
      }
    })

      this.send.emit(this.emailInput);
      this.emailInput = "";
      
      this.send.emit(this.userInput);
      this.userInput = "";
}
logOut=()=>{
this.show = this.Auth.logout(this.saveUser)
}
onSubmitCreateUser(form: NgForm) {
  this.Auth.admins.unshift(form.value);
  localStorage.setItem("Admins", JSON.stringify(this.Auth.admins));
  form.reset();
  this.createNewUser = !this.createNewUser;
}









}
