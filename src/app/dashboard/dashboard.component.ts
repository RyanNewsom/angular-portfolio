import { Component, OnInit} from '@angular/core';
import {BlogPost} from "../blog/BlogPost";
import {BlogService} from "../blog/blog.service";


@Component({
  providers: [BlogService],
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogPostsSlowly().then(blogPosts => this.blogPosts = blogPosts.slice(1, 5));
  }
}
