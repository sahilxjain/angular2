import { Component } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
        {{person.name}}
    </li>
  </ul>
  `
})
export class PeopleListComponent {
  people: Person[] = [];
  constructor(private _peopleService : PeopleService){
    this.people = _peopleService.getAll();
  }
}
