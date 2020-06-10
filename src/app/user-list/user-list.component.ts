import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
// userList is where it storage list of inputs that is send from the editUserComponent.
export class UserListComponent implements OnInit {
  
  color:boolean;
  //will add user to the list
  @Input() public addUsersToList;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  //will change toggle button when button is clicked
  userListColorChanger() {
  this.color = !this.color;
  }


}
