import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit: number = 20): string {
    return text.length > limit
      ? text.substring(0, limit) + '...'
      : text;
  }

}
