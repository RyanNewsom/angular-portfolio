import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { BlogpostsComponent }  from './blog/blogposts.component';
import { AppComponent }  from './app.component';
import {BlogDetailComponent} from "./blog/blog-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                ],

  declarations: [ AppComponent, BlogDetailComponent, BlogpostsComponent, DashboardComponent ], //view classes that belong to this (Components, directives, pipes)
  bootstrap:    [ AppComponent ] //root application view, only declared in the main module
})
export class AppModule { }
