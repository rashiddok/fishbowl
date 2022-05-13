import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IFeedPost } from '../../shared/models/IFeedPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements AfterViewInit {
  @Input() postData!: IFeedPost;
  isReadMore: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.calculateTextLines() < 4) {
      this.isReadMore = false;
      this.cdr.detectChanges();
    }
  }

  private calculateTextLines(): number {
    const textElement = document.querySelector(
      `#post_${this.postData._id} .post-text`
    ) as HTMLElement;
    let divHeight: number = textElement.offsetHeight;
    let lineHeight: number = parseFloat(
      getComputedStyle(textElement, null).lineHeight
    );
    return Math.round(divHeight / lineHeight);
  }
}
