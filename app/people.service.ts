import {Injectable} from "@angular/core"
import {Person} from './person'

// Used for http module and Observable method
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; // This file is necessary to fetch json data
import 'rxjs/add/operator/catch';

//@Injectable() //We did't use the Injectable decorator in components because the Component decorator enables dependency injection directly. But in case of services there are no componets. 

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

@Injectable()
export class PeopleService{

  jsondata:Person[] = [];
  constructor(private http: Http){
    var ll = this.fetchJson().subscribe(function(data){ console.log(data) }, error => console.log(error) );  //subscribe is an async observable function 
    console.log(ll);
  }

  public fetchJson(): Observable<any>{
    return this.http.get("./app/people.json").map((res:any) => res.json())
  }

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