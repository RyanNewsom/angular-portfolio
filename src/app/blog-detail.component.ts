import { Component, Input } from '@angular/core';
import {BlogPost} from "./blog/BlogPost";

@Component({
  selector: 'blog-detail',
  template: `
      <div *ngIf="post">
      <h2>{{post.name}} details!</h2>
      <div><label>id: </label>{{post.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="post.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class BlogDetailComponent {
  @Input() post: BlogPost;
}
