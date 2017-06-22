import {Component} from 'angular2/core';

@Component({
 selector: 'test-form',
 templateUrl:'/app/template/form-tpl.html',
 styles:[`
    .form-bg{
        background-color: #cde;
        width:  450px;
        padding: 20px;
    }
 
 `]
})

 export class FormComponent {
    public tempValue : string = "FORM Here";
    name: string;
    password:string;
    validateInput = function(){
        alert("validate");
    }
    
    constructor() {}
 }
