import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-router.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './Login/login.component'
import { SingleUserComponent } from './single-user/single-user.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { RouterModule,Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './api.service';

const linkBetween=   RouterModule.forRoot([
  {path:'user/:id',component:SingleUserComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},
])
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditUserComponent,
    UserListComponent,
    UserListItemComponent,
    LoginComponent,
    SingleUserComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    linkBetween,
    HttpClientModule,
  ],
  providers: [
    AppComponent,
    AuthService,
    DataService,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
