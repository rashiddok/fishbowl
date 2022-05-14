import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { InfiniteScrollModule } from '../components/infinite-scroll/infinite-scroll.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostModule, InfiniteScrollModule],
})
export class PostsModule {}
