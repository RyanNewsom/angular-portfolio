import { Component } from '@angular/core';
import {BlogPost} from "./blog/BlogPost";

//controls a patch of screen(presenter)
@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     
     <h2>My Blog Posts</h2>
    <ul class="blogPosts">
      
      <li *ngFor="let post of blogPosts" 
      [class.selected]="post === selectedPost"
      (click)="onSelect(post)">
        <span class="badge">{{post.id}}</span> {{post.name}}
      </li>
    </ul>  
    
    <blog-detail [post]="selectedPost"></blog-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .blogPosts {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .blogPosts li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .blogPosts li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .blogPosts li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .blogPosts .text {
      position: relative;
      top: -3px;
    }
    .blogPosts .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
`]
})

export class AppComponent  {
  title = 'Blog';
  blogPosts = BLOG_POSTS;
  selectedPost: BlogPost;

  onSelect(post: BlogPost): void {
    this.selectedPost = post;
  }
}



const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    name: 'First Post',
    description: 'Built an Angular app today... it was great!'
  },
  {
    id: 2,
    name: 'Second Post',
    description: 'Lorem Khaled Ipsum is a major key to success. You smart, you loyal, you a genius.'
  },
  {
    id: 3,
    name: 'Third Post',
    description: 'How’s business? Boomin. I’m up to something. The key is to drink coconut, fresh coconut, trust me.'
  },
  {
    id: 4,
    name: 'Fourth Post',
    description: '. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender.'
  },
  {
    id: 5,
    name: 'Fifth Post',
    description: 'You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up.'
  },
  {
    id: 6,
    name: 'Sixth Post',
    description: 'Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.'
  }
];

