import {Component} from 'angular2/core';

@Component({
 selector: 'action',
 templateUrl:'/app/template/action-tpl.html',
 styles:[`
        .div-bg {
            background-color: lightGrey;
        }
    `]
})

 export class ActionComponent {
    tempValue : string = "action : ";
    showAction : boolean = false;
    clicked = function(){
       this.tempValue = this.tempValue +1;
       
    }
    toggleAction = function(){
       
        if(this.showAction==true){
            this.showAction = false;
        } else{
            this.showAction = true;
        } 
    }

    constructor() {}
 }
