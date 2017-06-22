import {Component} from 'angular2/core'
import {AuthorsService} from '../services/authors.service'

@Component({
    selector: 'authors',
    templateUrl:'/app/template/authors-tpl.html',
    providers: [AuthorsService]
   
})
export class AuthorsComponent{
    title="The title of authors page";
    authors;

    constructor (authorsService : AuthorsService){
        this.authors = authorsService.getAuthors();
    }
}