import { Component, OnInit } from '@angular/core';
import {BlogPost} from "./blog/BlogPost";
import {BlogService} from "./blog/blog.service"

//controls a patch of screen(presenter)



@Component({
  selector: 'my-blogPosts',
  providers: [BlogService],
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

export class BlogpostsComponent  implements OnInit {
  constructor(private blogPostService: BlogService){ }

  title = 'Blog';
  blogPosts:  BlogPost[];
  selectedPost: BlogPost;

  ngOnInit(): void {
    this.getBlogPosts();
  }

  onSelect(post: BlogPost): void {
    this.selectedPost = post;
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPostsSlowly().then(blogPosts => this.blogPosts = blogPosts);
  }
}

