import { IReactionCounter } from './IReactionCounter';
import { IUserSign } from './IUserSign';

interface IMessageData {
  url: string;
  width: number;
  height: number;
  text: string;
}

export interface IFeedPost {
  _id: string;
  reactionCounters: IReactionCounter;
  sign: IUserSign;
  likesCount: number;
  messageType: number;
  messageData?: IMessageData;

  text: string;
  date: string;
  feedName: string;
  feedIcon: string;
}
