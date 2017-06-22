import {Pipe,PipeTransform} from 'angular2/core'
@Pipe({
    name:'formatName', pure: false
})
export class FormatName implements PipeTransform{
    transform(input:string, args: string[]):string{
        return input.length > 0 ? input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() )) : '';
    }
}
