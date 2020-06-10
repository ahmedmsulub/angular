import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router:Router) {console.log('ur in error page') }

  ngOnInit() {

  }
  // navigate(){
  //   this.router.navigate(['/**'])
  // }
  // show:boolean= true;
  // hide:boolean= false;
  // toggle(){
  //   this.show = !this.show;
  // }
  

}
