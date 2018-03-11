import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNewPipe'
})
export class MyNewPipePipe implements PipeTransform {

  transform(text:string, addText:string): string {
    return "$(text) $(addText)";
  }

}
