
import {Component} from 'angular2/core'
import {CourseService} from '../services/course.service'
import {CourseDetailsService} from '../services/coursedetail.service'
import {AutoGrowDirective} from '../directives/auto-grow.directive'
import {HighlightDirective} from '../directives/highlight.directive'
import {FormatName} from '../pipes/formatter.pipe'

@Component({
   selector: 'courses',
   templateUrl:'/app/template/courses-tpl.html',
    viewBindings: [CourseDetailsService],
    providers: [CourseService],
    directives: [AutoGrowDirective,HighlightDirective],
    pipes: [FormatName]
})
export class CoursesComponent{ 
    title = "The title of courses page";
    courses;
    nameVal: string = "name naming vale";
    birthday = new Date(1988, 3, 15); // April 15, 1988
    toggle = true; // start with true == shortDate
    constructor(courseService : CourseService){
        this.courses=courseService.getCourses();
    }
    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }
    /*constructor(service: CourseDetailsService) {
        service.load(query) { return http.get(query).subscribe(console.log("Response came!!!"))};
    }*/
}
