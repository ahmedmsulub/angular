import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../api.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

/**
 * single user component takes the singleUserUrl from api service and takes the single user which is clicked
 * depending on the id the user is clicked has.
 */
export class SingleUserComponent implements OnInit {
  user: object;
  id: string;
  userId: number;

 
  constructor(private _http: HttpClient, private route: ActivatedRoute, private api:DataService) {
  
  }
  ngOnInit() {

  }
  getJSONUsers() {
    let url = 'users'
    this.api.getUsersapi(url)
      .then(response => response.json())
      .then(json => {
        this.user = json[this.userId];
      })
  }
}






