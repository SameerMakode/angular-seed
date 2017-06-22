System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ActionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActionComponent = (function () {
                function ActionComponent() {
                    this.tempValue = "action : ";
                    this.showAction = false;
                    this.clicked = function () {
                        this.tempValue = this.tempValue + 1;
                    };
                    this.toggleAction = function () {
                        if (this.showAction == true) {
                            this.showAction = false;
                        }
                        else {
                            this.showAction = true;
                        }
                    };
                }
                ActionComponent = __decorate([
                    core_1.Component({
                        selector: 'action',
                        templateUrl: '/app/template/action-tpl.html',
                        styles: ["\n        .div-bg {\n            background-color: lightGrey;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActionComponent);
                return ActionComponent;
            }());
            exports_1("ActionComponent", ActionComponent);
        }
    }
});
//# sourceMappingURL=action.component.js.map