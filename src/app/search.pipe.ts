import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filterStr: string): any {
    if (!items) {
      return [];
    }
    if(!filterStr) {
      return items;
    }
	filterStr = filterStr.toLowerCase();
    return items.filter(
      i => i.firstName.toLowerCase().indexOf(filterStr) !== -1 
      || i.lastName.toLowerCase().indexOf(filterStr) !== -1 
      || i.email.toLowerCase().indexOf(filterStr) !== -1 
      || i.phone.toLowerCase().indexOf(filterStr) !== -1 
      || i.birthDate.toLowerCase().indexOf(filterStr) !== -1 
      || i.notes.toLowerCase().indexOf(filterStr) !== -1
    );
  }

}
