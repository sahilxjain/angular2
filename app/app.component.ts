import { Component } from '@angular/core';

import {Person} from "./person"
import {PeopleService} from "./people.service"
//import { PeopleListComponent } from "./people-list.component"  No need to import in component. Just add to declaration array in module


@Component({
  selector: 'my-app',
  // template: `    // Templeate moved to html
  //   `,
    templateUrl: 'app/app.component.html',
    providers: [PeopleService], // HERE! This registers the PeopleService  now Angular 2 knows to inject it when required

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