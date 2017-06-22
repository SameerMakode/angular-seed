import { Inject } from 'angular2/core';
import { Http ,Headers , HTTP_PROVIDERS } from 'angular2/http';

export interface CourseInterface {
    courseId: number,
    coursePrice: number,
    authorName: string
}

export class CourseDetailsService {
    http: Http;
    constructor(@Inject(Http) Http) {
        console.log(Http)
        this.http = Http;
    }

    load() {
        console.log("came here in service")
        var headers = new Headers();
        //headers.append('Authorization', <my username password>);

        this.http.get('https://some.api',{
            headers : headers
        }).map(res => console.log("Response came!!!"))

        console.log("done . . .")
    }
}