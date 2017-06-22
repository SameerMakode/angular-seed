
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.components'
import {AuthorsComponent} from './authors.component'
import {ActionComponent} from './action.component'
import {CounterComponent} from './counter.component'
import {FormComponent} from './form.component'
import {
 ROUTER_DIRECTIVES,
 ROUTER_PROVIDERS,
 HashLocationStrategy,
 LocationStrategy,
 RouteConfig,
} from 'angular2/router';

@Component({
    selector: 'my-app', 
    templateUrl:'/app/template/app-tpl.html',
    directives: [CoursesComponent,AuthorsComponent,ActionComponent,CounterComponent,FormComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { 
    //counter : CounterComponent;
    constructor() {}
}

