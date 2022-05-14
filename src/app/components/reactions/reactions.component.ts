import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  IUserReaction,
  ReactionIcons,
  Reactions,
} from '../../shared/enums/Reactions';
import { IReactionCounter } from '../../shared/models/IReactionCounter';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactionsComponent implements AfterViewInit {
  @Input() totalReactions!: number;
  @Input() reactionCounters!: IReactionCounter;
  @Output() reactionChange: EventEmitter<Reactions> =
    new EventEmitter<Reactions>();
  readonly DEFAULT_REACTION = ReactionIcons.like;
  showReactions: boolean = false;
  userReaction: Reactions | undefined;
  availableReactions: IUserReaction = {};
  constructor() {}

  ngAfterViewInit(): void {
    //TODO: Rework to switch case
    const reactions: string[][] = Object.keys(this.reactionCounters).map(
      (x) => [
        x,
        // @ts-ignore
        ReactionIcons[x],
      ]
    );
    this.availableReactions = Object.fromEntries(reactions);
  }

  toggleReaction() {
    if (this.userReaction) {
      this.setReaction(undefined);
      return;
    }
    this.setReaction(Reactions.like);
  }

  setReaction(reaction: Reactions | string | undefined) {
    const rect: Reactions = reaction as Reactions;
    this.userReaction = rect;
    this.showReactions = false;
    //TODO: This one should emit previous reaction
    this.reactionChange.emit(rect);
  }

  pickEmoji(value: Reactions) {
    return ReactionIcons[value];
  }
}
