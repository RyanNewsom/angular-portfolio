import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {BlogPost} from "./BlogPost";

@Injectable()
export class BlogService {

  private blogsUrl = 'api/blogPosts';  // URL to web api

  constructor(private http: Http) { }

  getBlogPosts(): Promise<BlogPost[]> {
    return this.http.get(this.blogsUrl)
      .toPromise()
      .then(response => response.json().data as BlogPost[])
      .catch(this.handleError);
  }

  getBlogPostsSlowly(): Promise<BlogPost[]> {
    return this.http.get(this.blogsUrl)
      .toPromise()
      .then(response => response.json().data as BlogPost[])
      .catch(this.handleError);
  }

  getBlogPostById(id: number): Promise<BlogPost> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as BlogPost)
      .catch(this.handleError);  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
