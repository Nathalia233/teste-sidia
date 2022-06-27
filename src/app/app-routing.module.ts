import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './feed/add-posts/add-posts.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: "feed", component: FeedComponent
  },
  {
    path: "add", component: AddPostsComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
