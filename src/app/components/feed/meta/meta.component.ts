import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import IMetaCard from '../../../shared/models/IMetaCard';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetaComponent implements AfterViewInit {
  @Input() meta!: IMetaCard;
  public isResults = false;
  constructor() {}

  ngAfterViewInit() {
    console.log(this.meta);
  }

  handleQuizAnswer(value: string) {
    this.showResults();
  }

  showResults() {
    this.isResults = true;
  }
}
