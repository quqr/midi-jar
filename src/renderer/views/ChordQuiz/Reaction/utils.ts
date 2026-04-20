import i18n from 'i18next';

import { GameState, STATUSES } from 'renderer/hooks/useQuiz';

export type Reaction = {
  id: string;
  status: STATUSES;
  index: number;
  score: number;
  text: string;
  visible: boolean;
};

const getReactions = (): { [key in STATUSES]?: string[] } => ({
  [STATUSES.different]: i18n.t('chordQuiz.reactions.different', {
    returnObjects: true,
  }) as string[],
  [STATUSES.subset]: i18n.t('chordQuiz.reactions.subset', { returnObjects: true }) as string[],
  [STATUSES.equal]: i18n.t('chordQuiz.reactions.equal', { returnObjects: true }) as string[],
  [STATUSES.superset]: i18n.t('chordQuiz.reactions.superset', { returnObjects: true }) as string[],
});

export const REACTIONS: { [key in STATUSES]?: string[] } = getReactions();

export const shouldTriggerNewReaction = (gameState: GameState, reaction?: Reaction | null) => {
  return (
    gameState.status >= 0 &&
    (!reaction ||
      reaction.index !== gameState.index ||
      reaction.status < gameState.status ||
      (reaction.status === gameState.status && reaction.score < gameState.score))
  );
};
