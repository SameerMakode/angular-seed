import {bootstrap}    from 'angular2/platform/browser'
import {RoutingComponent} from './components/routing.component'
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'

import {
 ROUTER_DIRECTIVES,
 ROUTER_PROVIDERS,
 PathLocationStrategy,
 LocationStrategy,
 RouteConfig,
} from 'angular2/router';

bootstrap(RoutingComponent,[
ROUTER_PROVIDERS,HTTP_PROVIDERS,
provide(LocationStrategy, {useClass: PathLocationStrategy})
]);