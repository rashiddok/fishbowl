import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Reactions } from '../../shared/enums/Reactions';
import { AvailableReaction } from './models/AvailableReaction';

enum ReactionIcons {
  like = '❤',
  helpful = '👍',
  smart = '💡',
  funny = '😂',
  uplifting = '🌟',
}

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactionsComponent {
  @Input() totalReactions: number = 0;
  @Output() reactionChange: EventEmitter<string> = new EventEmitter<string>();
  showReactions: boolean = false;
  userReaction: AvailableReaction | undefined;
  readonly DEFAULT_REACTION: AvailableReaction = new AvailableReaction(
    Reactions.like,
    ReactionIcons.like
  );
  availableReactions: AvailableReaction[] = [
    this.DEFAULT_REACTION,
    new AvailableReaction(Reactions.helpful, ReactionIcons.helpful),
    new AvailableReaction(Reactions.smart, ReactionIcons.smart),
    new AvailableReaction(Reactions.funny, ReactionIcons.funny),
    new AvailableReaction(Reactions.uplifting, ReactionIcons.uplifting),
  ];

  toggleReaction() {
    if (this.userReaction) {
      this.setReaction(undefined);
      return;
    }
    this.setReaction(new AvailableReaction(Reactions.like, ReactionIcons.like));
  }

  setReaction(reaction: AvailableReaction | undefined) {
    this.userReaction = reaction;
    this.showReactions = false;
    this.reactionChange.emit(reaction?.name);
  }
}
