import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
   name: 'heroNameFilter'
})

export class HeroNameFilterPipe implements PipeTransform {
   transform(itemArray: any[], searchText: string): any[]{
      if (!itemArray) return;
      if (!searchText) return itemArray;
      searchText = searchText.toLowerCase();
      return itemArray.filter( item => {
         return item.toString().toLowerCase().includes(searchText);
      })
   }
}
