import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false // параметр который динамически будет проверять 
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchFilter: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    } 
    
    return posts.filter(post => {
      return post[searchFilter].toLowerCase().includes(search.toLowerCase())
    })
  }

}
