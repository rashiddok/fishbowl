import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizAnswer } from '../../shared/models/QuizAnswer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  @Input() quiz!: QuizAnswer[];
  @Output() answerSubmitted: EventEmitter<string> = new EventEmitter<string>();
  quizForm: FormGroup = new FormGroup({
    answer: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.answerSubmitted.emit(this.quizForm.get('answer')?.value);
  }
}
