import { Reactions } from '../enums/Reactions';

export interface IReactionCounter {
  [Reactions.funny]: number;
  [Reactions.helpful]: number;
  [Reactions.smart]: number;
  [Reactions.uplifting]: number;
  [Reactions.like]: number;
}
