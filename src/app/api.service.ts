import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//takes api from jsonPlaceholder and displays it dashboard component
@Injectable({
  providedIn: "root"
})

export class DataService {
  userList;
  user;

  constructor(private http: HttpClient){}

  apiUrl = "https://jsonplaceholder.typicode.com/users";
  singleUserApi = "https://jsonplaceholder.typicode.com/users/1";
  

  getUsers() {
    return this.http.get(this.apiUrl);
  }
  returnUsers() {
    return this.getUsers().subscribe(data => (this.userList = data));
  }

  returnList() {
    return this.userList;
  }

  getUsersapi(url) {
    let base_url = 'https://jsonplaceholder.typicode.com/';
    return fetch(base_url + url);
  }



}

