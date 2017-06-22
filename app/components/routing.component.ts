import {Component} from 'angular2/core';
import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'
import {AppComponent} from './app.component'
 import {
 ROUTER_DIRECTIVES,
 ROUTER_PROVIDERS,
 LocationStrategy,
 RouteConfig,
} from 'angular2/router';

@RouteConfig([
 { path: '/', name: 'App', component: AppComponent },
 { path: '/home', name: 'Home', component: HomeComponent, data:{isAdmin:true} },
 { path: '/about/:id', name: 'About', component: AboutComponent }
 ])
@Component({
selector: 'router-app',
directives: [ROUTER_DIRECTIVES],
templateUrl:'/app/template/routing-tpl.html',
})
export class RoutingComponent { }
