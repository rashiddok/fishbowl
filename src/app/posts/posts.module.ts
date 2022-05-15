import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { InfiniteScrollModule } from '../components/infinite-scroll/infinite-scroll.module';
import { PostsComponent } from './posts.component';
import { MetaComponent } from './meta/meta.component';
import { QuizModule } from '../components/quiz/quiz.module';

@NgModule({
  declarations: [PostsComponent, MetaComponent],
  imports: [CommonModule, PostModule, InfiniteScrollModule, QuizModule],
})
export class PostsModule {}
