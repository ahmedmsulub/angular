import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
// the editUser is where u will be able to add users and remove users and it will emit everything to userList
export class EditUserComponent implements OnInit {
  
  valueOfInput = "";
  
  @Output() addOutPut = new EventEmitter<string>();
  @Output() removeOutPut = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(){

  }
// its a button function that will add user by clicking the button
  ButtonAddUser() {
      this.addOutPut.emit(this.valueOfInput);
      this.valueOfInput = "";
    
  }
  // its a button function that will remove user by clicking the button
  ButtonRemoveUser() {
    this.removeOutPut.emit();
  }

}
