System.register(['angular2/core', './home.component', './about.component', './app.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_component_1, about_component_1, app_component_1, router_1;
    var RoutingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RoutingComponent = (function () {
                function RoutingComponent() {
                }
                RoutingComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'App', component: app_component_1.AppComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, data: { isAdmin: true } },
                        { path: '/about/:id', name: 'About', component: about_component_1.AboutComponent }
                    ]),
                    core_1.Component({
                        selector: 'router-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: '/app/template/routing-tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoutingComponent);
                return RoutingComponent;
            }());
            exports_1("RoutingComponent", RoutingComponent);
        }
    }
});
//# sourceMappingURL=routing.component.js.map