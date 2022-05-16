import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [QuizComponent],
})
export class QuizModule {}
