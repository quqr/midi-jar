import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Game } from 'renderer/hooks/useQuiz';

type IndexedGame = Game & {
  index: number;
};

type Props = {
  className?: string;
  games: Game[];
  gameIndex: number;
  maxCount?: number;
};

const defaultProps = {
  className: undefined,
  maxCount: 4,
};

const GameList: React.FC<Props> = ({
  className,
  games,
  gameIndex,
  maxCount = defaultProps.maxCount,
}: Props) => {
  const { t } = useTranslation();
  const displayedGames = useMemo(
    () =>
      games
        .map<IndexedGame>((game, index) => ({ ...game, index }))
        .filter(({ index }) => index >= gameIndex - maxCount && index <= gameIndex),
    [games, gameIndex, maxCount]
  );

  const best = useMemo(
    () =>
      games.reduce<number | null>((b, { score }, index) => {
        if (index > gameIndex) return b;
        if (b === null) return score;

        return score > b ? score : b;
      }, null),
    [games, gameIndex]
  );

  return (
    <ul className={`${className || ''} flex flex-col gap-2 mb-0 p-[8px_0] list-none`}>
      {displayedGames.length > maxCount && (
        <li className="flex items-center w-full transition-transform transition-opacity transition-margin duration-800 ease-in-out bg-[#5c5c5c] relative h-[32px] leading-[32px]">
          <span className="z-10 pr-8 pl-8 flex-grow-0 bg-[#5c5c5c] relative after:absolute after:top-0 after:left-full after:bottom-0 after:content-[''] after:border-y-[16px] after:border-l-[#5c5c5c] after:border-r-transparent">
            Best
          </span>
          <span className="flex-grow bg-[#303030] pl-[44px] pr-0 relative after:absolute after:top-0 after:left-full after:bottom-0 after:content-[''] after:border-y-[16px] after:border-l-[#303030] after:border-r-transparent">
            {best}
          </span>
        </li>
      )}
      {displayedGames.map((game, index) => {
        const isHidden = displayedGames.length > maxCount && index === 0;
        const isCurrent = game.index === gameIndex;

        let gameClassStr =
          'flex items-center w-full transition-transform transition-opacity transition-margin duration-800 ease-in-out ';
        if (isHidden) gameClassStr += 'pointer-events-none mt-[-40px] opacity-0 ';
        if (isCurrent) {
          gameClassStr += 'scale-125 origin-left bg-[#3567f0] relative h-[32px] leading-[32px]';
        } else {
          gameClassStr += 'bg-[#5c5c5c] relative h-[32px] leading-[32px]';
        }

        let labelClassStr = 'z-10 pr-8 pl-8 flex-grow-0 ';
        if (isCurrent) {
          labelClassStr +=
            'bg-[#3567f0] after:absolute after:top-0 after:left-full after:bottom-0 after:content-[""] after:border-y-[16px] after:border-l-[#3567f0] after:border-r-transparent';
        } else {
          labelClassStr +=
            'bg-[#5c5c5c] after:absolute after:top-0 after:left-full after:bottom-0 after:content-[""] after:border-y-[16px] after:border-l-[#5c5c5c] after:border-r-transparent';
        }

        let scoreClassStr = 'flex-grow ';
        if (isCurrent) {
          scoreClassStr +=
            'bg-[#1148e1] pl-[44px] pr-0 after:absolute after:top-0 after:left-full after:bottom-0 after:content-[""] after:border-y-[16px] after:border-l-[#1148e1] after:border-r-transparent';
        } else {
          scoreClassStr +=
            'bg-[#303030] pl-[44px] pr-0 after:absolute after:top-0 after:left-full after:bottom-0 after:content-[""] after:border-y-[16px] after:border-l-[#303030] after:border-r-transparent';
        }

        return (
          <li className={gameClassStr} key={game.index}>
            <span className={labelClassStr}>{t('chordQuiz.game', { n: game.index + 1 })}</span>
            <span className={scoreClassStr}>{game.score}</span>
          </li>
        );
      })}
    </ul>
  );
};

GameList.defaultProps = defaultProps;

export default GameList;
