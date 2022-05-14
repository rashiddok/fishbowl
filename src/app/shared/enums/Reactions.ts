export enum Reactions {
  like = 'like',
  helpful = 'helpful',
  smart = 'smart',
  funny = 'funny',
  uplifting = 'uplifting',
}

export interface IUserReaction {
  [key: string]: string;
}

export enum ReactionIcons {
  like = '❤',
  helpful = '👍',
  smart = '💡',
  funny = '😂',
  uplifting = '🌟',
}
