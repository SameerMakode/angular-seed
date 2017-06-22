import {Component} from 'angular2/core';
import {RouteData, RouteParams} from 'angular2/router';
	@Component({
		selector: 'home',
		template: `<h1>Welcome!</h1>
			id: {{testData}}<br/>
			admin: {{isAdmin}}
		`
	})
	export class HomeComponent {
		public isAdmin: String;
		public testData: String;
		constructor(data:RouteData, params: RouteParams){
			this.isAdmin = data.get('isAdmin');
			this.testData = params.get('pid');
		}
	}