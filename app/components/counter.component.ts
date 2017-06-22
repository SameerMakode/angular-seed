import {Component} from 'angular2/core'

@Component({
    selector: 'counter',
    template:`
        <div>
        {{titleVal}}<br/>
        Likes::{{likes}}<br/>
        Dislikes::{{dislikes}}
        </div>
        <div>
            <input type="button" (click)="countVotes(true)" value="Like it!!"/>
            <input type="button" (click)="countVotes(false)" value="Dislike it!!"/>
        </div>
    `,
   
})
export class CounterComponent{
    titleVal="The title of counter page";
    likes:number = 0;
    dislikes:number = 0;
    
    public countVotes = function(vote:boolean){
        vote ? this.likes++ : this.dislikes++;
    }
}