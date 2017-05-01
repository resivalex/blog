import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(phones: any, term: any): any {
    if (!term) return phones;
    return phones.filter(function(p) { return p.brand.toLowerCase().includes(term.toLowerCase()) });
  }

}
