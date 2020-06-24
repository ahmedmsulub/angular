import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//the dashboard is the app component that contains both editUser and userList and userListItem its the parent of all those components
export class DashboardComponent implements OnInit {

  addUser;
  public userList:any;
  number:number
  constructor(private Auth:AuthService, private api:DataService) {
    this.getJSONUsers();
  }
  show=this.Auth.show
  
  ngOnInit() {
    this.userList = this.api.returnList();
    return this.api.returnUsers();

  }
  addOutPutFunc(addUser: string) {
    this.userList.unshift({ id: this.number, name: addUser });
    this.number =  this.userList.length +1
  }

  removeUserFunc=(): void=> {
    this.userList.shift();
}

getJSONUsers() {
  let url = 'users'
  this.api.getUsersapi(url)
    .then(response => response.json())
    .then(json => {
      this.userList = json;
      this.number =  this.userList.length +1;
    })
}

}