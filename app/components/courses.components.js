System.register(['angular2/core', '../services/course.service', '../services/coursedetail.service', '../directives/auto-grow.directive', '../directives/highlight.directive', '../pipes/formatter.pipe'], function(exports_1, context_1) {
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
    var core_1, course_service_1, coursedetail_service_1, auto_grow_directive_1, highlight_directive_1, formatter_pipe_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (coursedetail_service_1_1) {
                coursedetail_service_1 = coursedetail_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (formatter_pipe_1_1) {
                formatter_pipe_1 = formatter_pipe_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page";
                    this.nameVal = "name naming vale";
                    this.birthday = new Date(1988, 3, 15); // April 15, 1988
                    this.toggle = true; // start with true == shortDate
                    this.courses = courseService.getCourses();
                }
                Object.defineProperty(CoursesComponent.prototype, "format", {
                    get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
                    enumerable: true,
                    configurable: true
                });
                CoursesComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        templateUrl: '/app/template/courses-tpl.html',
                        viewBindings: [coursedetail_service_1.CourseDetailsService],
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective, highlight_directive_1.HighlightDirective],
                        pipes: [formatter_pipe_1.FormatName]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.components.js.map