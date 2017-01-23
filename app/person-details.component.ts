import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; // Router is used to implement back button
import { PeopleService } from './people.service'
import { Person } from './person';

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-details.component.html', 
  /*template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="person">
    <h2>You selected:  {{person.name}}  </h2>
    <h3>Description</h3>
    <p>
       {{person.name}}  weights  {{person.weight}} and is  {{person.height}} tall.
    </p>
  </section>
  <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `*/
})
export class PersonDetailsComponent implements OnInit, OnDestroy{
  //@Input() person : Person; // We used Input decorator to get property person defined in property binding in parent Component

  // By Routing Way
  person: Person;
  sub: any;
  constructor(private peopleservice: PeopleService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params=>{ //subscribe method let’s us execute a bit of code when the async operation, in this case loading a route and retrieving the route params, is complete
      let id = Number.parseInt(params['id']);
      this.person = this.peopleservice.get(id);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe; //avoid memory leaks using OnDestroy life cycle hook
  }

    gotoPeoplesList(){
        let link = ['/persons'];
        this.router.navigate(link); // Call router.navigate() method for redirection to its route
    }

    savePersonDetails(){
        alert(`saved!!! ${JSON.stringify(this.person)}`);
        this.peopleservice.save(this.person);
    }



}

