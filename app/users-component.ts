import {Component,OnInit} from '@angular/core'
import {UsersService} from './users.service'


@Component({
    templateUrl:'app/users-component.html',
    providers: [UsersService]
})

export class UsersComponent implements OnInit{

    public employees:any = [];

    constructor(private _usersService : UsersService){}

    ngOnInit(){
        console.log('here');
        this._usersService.getAll().subscribe( (x)=> this.employees = x ,  );
    }
}
