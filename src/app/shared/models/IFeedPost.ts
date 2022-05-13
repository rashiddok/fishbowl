import { IReactionCounter } from './IReactionCounter';
import { IUserSign } from './IUserSign';

export interface IFeedPost {
  _id: string;
  reactionCounters: IReactionCounter;
  sign: IUserSign;
  likesCount: number;
  messageType: string;
  text: string;
  date: string;
  feedName: string;
  feedIcon: string;
}
