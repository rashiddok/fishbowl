import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { ReactionsModule } from '../../components/reactions/reactions.module';
import { PostedAsModule } from '../../components/posted-as/posted-as.module';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, ReactionsModule, PostedAsModule],
  exports: [PostComponent],
})
export class PostModule {}
