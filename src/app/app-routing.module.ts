import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BlogpostsComponent }  from './blog/blogposts.component';
import {BlogDetailComponent} from "./blog/blog-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: DashboardComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'blog',     component: BlogpostsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
