import { Directive, ElementRef, AfterContentInit } from 'angular2/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngAfterContentInit(){
        //you can get to the element content here 
        console.log(this.el.nativeElement);
    }
}