import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { routing } from './app.routes';

import { AppComponent }  from './app.component';

// Import All child components here
import { PeopleListComponent } from "./people-list.component"
import { PersonDetailsComponent } from './person-details.component'

import {AboutUsComponent} from './about-us-component'
import {UsersComponent} from './users-component'



@NgModule({
  imports:      [ BrowserModule,routing,FormsModule,HttpModule ],
  declarations: [ AppComponent, PeopleListComponent,PersonDetailsComponent,AboutUsComponent,UsersComponent ],
  bootstrap:    [ AppComponent ]
  //providers: [] // Used the same instance of a service for whole application. Also import service first
})
export class AppModule { }
