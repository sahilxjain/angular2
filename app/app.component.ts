import { Component } from '@angular/core';

import {Person} from "./person"
import {PeopleService} from "./people.service"
//import { PeopleListComponent } from "./people-list.component"  No need to import in component. Just add to declaration array in module


@Component({
  selector: 'my-app',
  template: `
    <div class = "container">
      <h1> {{title}} </h1>
      <table class="table table-striped table-bordered table-hover">
        <tr *ngFor="let person of people" (click)=onClick(person) [class.selected]="selected===person">
          <td>{{person.name}}</td>
        </tr>
      </table>
      <table *ngIf="selected.name" class="table table-striped table-bordered table-hover"> <!-- selected.name is empty so its false by default -->
        <tr>
          <th>Height</th>
          <th>Weight</th>
        </tr>
        <tr>
          <td>{{selected.height}}</td>
          <td>{{selected.weight}}</td>
        </tr>
      </table>
      <p>Below list is imported from other componment</p>
      <people-list></people-list> <!-- Our child component selector -->
    </div>
    `,
    providers: [PeopleService],
    styleUrls: ['app/src/css/main.css']
    //  directives: [PeopleListComponent], No need to add directives in component. Just add to declaration array in module
})
export class AppComponent  { 
    title:string = 'Star Wars PPlz!!!';


    // Directly Using static data without an service
    // public people:Person[] = [
    //   {name: 'Luke Skywalker', height: 177, weight: 70},
    //   {name: 'Darth Vader', height: 200, weight: 100},
    //   {name: 'Han Solo', height: 185, weight: 85}
    // ];

    // Now importing above data with a service
    // this shorthand syntax automatically creates and initializes a new private member in the class
    people: Person[] = []; // intialise variable people with class people defined in people.ts
    constructor(private _peopleService: PeopleService){
        this.people = _peopleService.getAll();
    }

    selected = {};


    onClick(c:any){
        this.selected = c;
        //console.log(Object.keys(this.selected).length);
    }
 }

/*
name:string
TypeScript let’s you add type annotation to your variable and function declarations. This helps you with better tooling like intellisense and to catch type errors.

JavaScript classes are just syntactic sugar over the existing prototypical inheritance model.

*/