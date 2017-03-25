import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import { AppComponent }  from './app.component';
import {BlogDetailComponent} from "./blog-detail.component";

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule
                ],
  declarations: [ AppComponent, BlogDetailComponent ], //view classes that belong to this (Components, directives, pipes)
  bootstrap:    [ AppComponent ] //root application view, only declared in the main module
})
export class AppModule { }
