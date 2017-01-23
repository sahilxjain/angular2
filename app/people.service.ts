import {Injectable} from "@angular/core"
import {Person} from './person'

//@Injectable() //We did't use the Injectable decorator in components because the Component decorator enables dependency injection directly. But in case of services there are no componets. 

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

export class PeopleService{
  getAll() : Person[] {
    //return PEOPLE;
    return PEOPLE.map(p => this.clone(p));
  }
  get(id: number): Person{
    //return PEOPLE.find(p => p.id === id);
    return this.clone(PEOPLE.find(p => p.id === id)); //to avoid sharing the same object references between the different components in the app so we can simulate “saving” in a way more faithful to reality.
  }
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved muahahaha
  }
  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

}