import React, { useEffect, useState, useRef } from 'react';

import { randomPick } from 'renderer/helpers';
import { STATUSES, GameState } from 'renderer/hooks/useQuiz';

import { Reaction, REACTIONS, shouldTriggerNewReaction } from './utils';

type Props = {
  className?: string;
  gameState: GameState;
};

const defaultProps = {
  className: undefined,
};

const ChordQuizReaction: React.FC<Props> = ({ className, gameState }) => {
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const reactionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (shouldTriggerNewReaction(gameState, reaction)) {
      if (reactionTimeout.current) {
        clearTimeout(reactionTimeout.current);
      }

      setReaction({
        id: `${gameState.index}-${gameState.status}-${gameState.score}`,
        index: gameState.index,
        status: gameState.status,
        score: gameState.score,
        text: randomPick(REACTIONS[gameState.status] ?? []),
        visible: true,
      });

      reactionTimeout.current = setTimeout(() => {
        setReaction((r) => (r ? { ...r, visible: false } : null));
      }, 3000);
    }
  }, [reaction, gameState]);

  // Helper function to determine the classes based on status
  const getStatusClasses = () => {
    if (!reaction || !reaction.visible) {
      return 'animate-[disappear_0.3s] opacity-0';
    }

    switch (reaction.status) {
      case STATUSES.different:
        return 'animate-[inflate_0.6s,bump_0.3s,nope_0.3s_ease_1_0.2s] text-[color:--rocher-danger]';
      case STATUSES.subset:
        return 'animate-[inflate_0.6s,almostBump_0.5s_linear] text-[color:--rocher-warning]';
      case STATUSES.equal:
        return 'animate-[inflate_0.6s,bump_0.3s,yes_0.5s_ease_1_0.2s] text-[color:--rocher-success]';
      case STATUSES.superset:
        return 'animate-[inflate_2s,bumpWow_0.6s_ease-out] text-[color:--rocher-primary]';
      default:
        return '';
    }
  };

  return reaction ? (
    <div
      id="ChordQuizReaction"
      className={`relative font-bold font-['Rocher'] font-[family-name:--rocher-font] text-[min(5vh,5vw)] ${getStatusClasses()}
        ${className || ''}
      `}
      key={reaction.id}
    >
      {reaction.text}
    </div>
  ) : null;
};

ChordQuizReaction.defaultProps = defaultProps;

export default ChordQuizReaction;
