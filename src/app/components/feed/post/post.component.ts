import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { IFeedPost } from '../../../shared/models/IFeedPost';
import { Reactions } from '../../../shared/enums/Reactions';
import timeAgo from '../../../shared/helpers/timeago';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements AfterViewInit {
  @Input() postData!: IFeedPost;
  public isReadMore: boolean = true;
  public formatedDate!: string;
  private hasUserReaction: boolean = false;
  public readonly TEXT_MAX_CHARS: number = 250;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.calculateTextWords() < this.TEXT_MAX_CHARS) {
      this.isReadMore = false;
    }
    this.formatedDate = timeAgo(this.postData.date);
    this.cdr.detectChanges();
  }

  private calculateTextWords(): number {
    return this.postData.text.length;
  }

  public unfoldText() {
    this.isReadMore = false;
  }

  public changeReactionCounter(reaction: string) {
    if (reaction === undefined) {
      this.hasUserReaction = false;
      this.postData.likesCount--;
      return;
    }
    if (this.hasUserReaction) {
      //http request
      return;
    }
    this.postData.likesCount++;
    this.hasUserReaction = true;
  }
}
