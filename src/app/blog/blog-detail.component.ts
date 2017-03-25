// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {BlogPost} from "./BlogPost";
import {BlogService} from "./blog.service"
import 'rxjs/add/operator/switchMap';

@Component({
  providers: [BlogService],
  selector: 'blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: [ './blog-detail.component.css' ]

})
export class BlogDetailComponent implements OnInit{
  @Input() post: BlogPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.blogService.getBlogPostById(+params['id']))
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }
}
