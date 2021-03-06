import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people"> <!-- Removed this for routing (click)="selectPerson(person)" -->
      <a href="#" [routerLink]="['/persons', person.id]">
        {{person.name}}
      </a>
    </li>
  </ul>
  
  <!-- Angular 2 property bindings: Here we bind person to child component-->
  <!-- <person-details [person]="selectedPerson"></person-details>  Removed in case of routing-->
  `
})
export class PeopleListComponent implements OnInit{

  people: Person[] = [];
  isLoading: boolean = true;
  error_message: string = '';


  //Way 1 without OnInit
  // constructor(private _peopleService : PeopleService){
  //   this.people = _peopleService.getAll();
  // }

  //Way2 Using OnInit Way
  //selectedPerson: Person;
  constructor(private peopleService : PeopleService){}
  ngOnInit(){
    //this.people = this.peopleService.getAll(); // Fetching static data here through service
    this.peopleService.fetchJson().subscribe( (x) => this.people = x, (e) => this.error_message = e ); // fetched data from json file
  }
  // selectPerson(person:Person){
  //   this.selectedPerson = person;
  // }

  //Way 3 By routing



}