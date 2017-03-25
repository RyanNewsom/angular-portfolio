import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import { BlogpostsComponent }  from './blog/blogposts.component';
import { AppComponent }  from './app.component';
import {BlogDetailComponent} from "./blog/blog-detail.component";
import { RouterModule }   from '@angular/router';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: 'blog',
                      component: BlogpostsComponent
                    }
                  ])
                ],

  declarations: [ AppComponent, BlogDetailComponent, BlogpostsComponent ], //view classes that belong to this (Components, directives, pipes)
  bootstrap:    [ AppComponent ] //root application view, only declared in the main module
})
export class AppModule { }
