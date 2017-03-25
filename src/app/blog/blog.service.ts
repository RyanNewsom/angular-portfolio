import { Injectable } from '@angular/core';
import {BlogPost} from "./BlogPost";
import {BLOG_POSTS} from "./mock-blogposts";

@Injectable()
export class BlogService {


  getBlogPosts(): Promise<BlogPost[]> {
    return Promise.resolve(BLOG_POSTS);
  }

  getBlogPostsSlowly(): Promise<BlogPost[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBlogPosts()), 2000);
    });
  }

  getBlogPostById(id: number): Promise<BlogPost> {
    return this.getBlogPosts().then(blogPosts => blogPosts.find(blogPost => blogPost.id == id));
  }

}
