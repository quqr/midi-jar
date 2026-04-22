import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import useQuiz, { STATUSES, Game } from 'renderer/hooks/useQuiz';
import useNotes from 'renderer/hooks/useNotes';
import { ChordIntervals, ChordName } from 'renderer/components';

import Reaction from './Reaction';
import GameList from './GameList';

const statusColors: Record<string, string> = {
  none: 'text-white',
  different: 'text-[#6241bc]',
  subset: 'text-[#d89845]',
  equal: 'text-[#19a86c]',
  superset: 'text-[#648bf4]',
};

const ChordQuiz: React.FC = () => {
  const { settings } = useSettings();
  const { t } = useTranslation();

  const quizSettings = settings.chordQuiz;
  const notationSettings = settings.notation;

  const { chords, pitchClasses } = useNotes();

  const { games, gameState } = useQuiz(pitchClasses, chords, quizSettings, notationSettings);

  const chordElements = useMemo(
    () =>
      [
        ...(games[gameState.gameIndex] ? games[gameState.gameIndex].chords : []),
        ...(games[gameState.gameIndex + 1] ? games[gameState.gameIndex + 1].chords : []),
      ].reduce(
        (acc, chord, index) => {
          let type = null;
          if (index === gameState.index - 1) {
            type = 'prevChord';
          }

          if (index === gameState.index) {
            type = 'targetChord';
          }

          if (index === gameState.index + 1) {
            type = 'nextChord';
          }

          if (type) {
            return [
              ...acc,
              {
                index: games[gameState.gameIndex]
                  ? index % games[gameState.gameIndex].chords.length
                  : index,
                chord,
                type,
              },
            ];
          }

          return acc;
        },
        [] as Array<{
          index: number;
          chord: Game['chords'][number];
          type: string;
        }>
      ),
    [games, gameState.index, gameState.gameIndex]
  );

  if (!settings) return null;

  if (!games.length)
    return (
      <div
        id="ChordQuiz"
        className="relative flex w-full h-full flex-col justify-center items-center overflow-hidden p-4 gap-2"
      >
        {t('chordQuiz.gameWillStart')}
      </div>
    );

  return (
    <div
      id="ChordQuiz"
      className="relative flex w-full h-full flex-col justify-center items-center overflow-hidden p-4 gap-2"
    >
      <div className="relative w-full flex-[0_0_0px] flex-grow flex-shrink-0">
        {quizSettings.displayReaction && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Reaction gameState={gameState} />
          </div>
        )}
        {quizSettings.gamification && (
          <GameList
            className="absolute top-0 left-0 w-auto"
            games={games}
            gameIndex={gameState.gameIndex}
          />
        )}
      </div>

      <div className="relative h-[min(20vw,50vh)] w-full overflow-hidden flex-shrink-0 flex flex-col justify-end items-center p-2">
        {chordElements.map((c) => (
          <div
            key={c.index}
            className={`absolute top-0 bottom-0 flex items-center justify-center transition-all duration-500 ease [transition-property:color,transform] ${
              c.type === 'targetChord'
                ? `w-full right-0 text-[min(20vh,10vw)] opacity-100 font-bold tracking-[0.02em] [transform:perspective(3em)_rotateY(0deg)] [text-shadow:0_0.05em_0.1em_rgba(0,0,0,0.6)] ${
                    statusColors[`status--${STATUSES[gameState.status]}`] ?? ''
                  }`
                : ''
            }${
              c.type === 'nextChord'
                ? ' w-[15%] right-[5%] text-[3vw] opacity-80 [transform:perspective(3em)_rotateY(-36deg)] [text-shadow:0_0.05em_0.1em_rgba(0,0,0,0.6)] animate-[swipe_0.3s_ease_1]'
                : ''
            }${
              c.type === 'prevChord'
                ? ' w-[15%] left-0 right-auto text-[2vw] opacity-0 [transform:perspective(3em)_rotateY(36deg)] [text-shadow:0_0.05em_0.1em_rgba(0,0,0,0.6)] [transition-delay:0s,0s,0.1s]'
                : ''
            }`}
          >
            <ChordName chord={c.chord} notation={quizSettings.chordNotation} />
          </div>
        ))}
      </div>
      {quizSettings.displayName && (
        <div className="text-[18px] font-semibold px-0 py-1 tracking-[0.03em]">
          {games[gameState.gameIndex].chords[gameState.index].name}
        </div>
      )}
      {quizSettings.displayIntervals && (
        <div className="text-[min(3vw,3vh)] font-medium tracking-[0.05em]">
          <ChordIntervals
            targets={games[gameState.gameIndex].chords[gameState.index].intervals}
            intervals={gameState.status > 0 ? gameState.chord?.intervals : []}
            pitchClasses={pitchClasses}
            tonic={games[gameState.gameIndex].chords[gameState.index].tonic}
            quizMode
          />
        </div>
      )}
      <div className="flex flex-col flex-[0_0_0px] flex-grow flex-shrink-0 w-full items-center justify-center gap-[4px] pt-[8px] pb-[8px] [&>*]:h-[2em]">
        <div className="text-[min(2vh,2vw)] font-bold px-[8px] py-[4px] rounded-lg bg-white/5 shadow-sm">
          {gameState.index + 1} / {games[gameState.gameIndex].chords.length}
        </div>
        {quizSettings.gamification && (
          <div
            className="text-[20px] font-bold px-[8px] py-[4px] rounded-lg bg-primary-500/15 shadow-sm"
            style={
              {
                fontFamily: "'Rocher'",
                fontVariationSettings: "'BVEL' 50, 'SHDW' 50",
                '--font-palette': '--Rocher--white',
              } as React.CSSProperties
            }
          >
            {gameState.score} {t('chordQuiz.pts')}
          </div>
        )}
        <div
          className="flex text-[min(2vh,2vw)] overflow-hidden flex-grow-0 flex-shrink items-center justify-center"
          style={{ textShadow: '0 0.05em 0.1em rgba(0, 0, 0, 0.6)' }}
        >
          <ChordName chord={gameState.chord} notation={quizSettings.chordNotation} />
        </div>
      </div>
    </div>
  );
};

export default ChordQuiz;
