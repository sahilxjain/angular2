import {Routes,RouterModule} from  "@angular/router" //to make our routes available to the rest of the application, we import the RouterModule

import  {PeopleListComponent} from "./people-list.component"
import { PersonDetailsComponent } from './person-details.component'

import {AboutUsComponent} from './about-us-component'


// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

export const routing = RouterModule.forRoot(routes);