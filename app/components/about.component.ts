import {Component} from 'angular2/core';
import {RouteData, RouteParams} from 'angular2/router';
@Component({
 selector: 'about',
 template: `<h1>About</h1>
 {{testData}}`
})
 export class AboutComponent {
        public testData: String;
		constructor(data:RouteData, params: RouteParams){
			this.testData = params.get('id');
		}
 }