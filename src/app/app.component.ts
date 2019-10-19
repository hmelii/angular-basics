import {Component, Input, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {

  isVisible = true
  
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

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'Changed',
        text: 'New Text',
        id: 33
      }
    }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);   
  }

  removePost(id: number) {
    console.log('id: ', id)
    this.posts = this.posts.filter(item => item.id !== id);
    console.log(this.posts)
  }

  
  

}
