import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { InfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';
import { FeedComponent } from './feed.component';
import { PostsStore } from './state/posts.store';
import { MetaModule } from './meta/meta.module';
import { ScrolledBottomModule } from '../../directives';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    PostModule,
    MetaModule,
    InfiniteScrollModule,
    ScrolledBottomModule,
  ],
  providers: [PostsStore],
  exports: [FeedComponent],
})
export class FeedModule {}
