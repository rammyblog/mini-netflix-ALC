import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'replaceWithPercent' })
export class MoviePipe implements PipeTransform {

  transform(query?: string) {
    return query.split(' ').join('+');
  }
}
