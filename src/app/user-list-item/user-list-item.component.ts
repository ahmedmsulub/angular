import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../api.service';
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
// in this class you will be able to to change colors in the list of userListComponent
export class UserListItemComponent implements OnInit {
 //this storage all values of what you type in -> input userName
  @Input() public user;
  //with this input you will be able to change colors in the userListComponents
  @Input() public change;

  constructor(private router:Router,private api:DataService) { }
  routeToSingle(){
    this.router.navigate(['/singeUser'])
  }
  ngOnInit() { }
}
