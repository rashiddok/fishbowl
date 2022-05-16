import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaComponent } from './meta.component';
import { QuizModule } from '../../quiz/quiz.module';

@NgModule({
  declarations: [MetaComponent],
  imports: [CommonModule, QuizModule],
  exports: [MetaComponent],
})
export class MetaModule {}
