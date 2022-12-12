import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'summary',
    pure:true
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=20) {
        console.log("Summary Pipe is called...");
        let temp=(<string>value);

        if(temp==null){
            return temp
        }

        // return (temp.substring(0,20)+'...');
        return (temp.substring(start,end)+'...');

    }

}