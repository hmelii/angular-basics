import {Component, Input} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Title 1',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi?',
    },
    {
      id: 2,
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, soluta!',
    },
    {
      id: 3,
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tenetur?',
    }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post);   
  }
  

}
