import React, { useMemo } from 'react';

import { ChordIntervalsProps } from './types';
import { INTERVALS, getPlayedIntervals, isIncludedAs } from './utils';

const PLAYED_HEIGHT_MAP: Record<number, string> = {
  0: 'h-[50%]',
  1: 'h-[60%]',
  2: 'h-[70%]',
  3: 'h-[80%]',
  4: 'h-[90%]',
};

export const ChordIntervals: React.FC<ChordIntervalsProps> = ({
  className,
  intervals,
  targets,
  pitchClasses,
  tonic,
  quizMode,
}) => {
  const played = useMemo(
    () => getPlayedIntervals(tonic, pitchClasses || []),
    [tonic, pitchClasses]
  );

  const hasTargets = targets && targets.length;

  return (
    <div className={`flex items-center h-[6em] ${className ?? ''}`}>
      {INTERVALS.BASE.map((i, index) => {
        const activeAs = intervals && isIncludedAs(i, intervals);
        const targetAs = targets && isIncludedAs(i, targets);

        const isPlayed = played[index];
        const playedLevel = Math.min(4, isPlayed);

        let bgColor = 'bg-[#5c5c5c]';

        if (activeAs || targetAs) {
          if (hasTargets) {
            if (targetAs && (activeAs || isPlayed)) {
              bgColor = 'bg-[#127c4f]';
            } else if (targetAs) {
              bgColor = quizMode ? 'bg-[#5c5c5c]' : 'bg-[#3567f0]';
            } else if (activeAs) {
              bgColor = 'bg-[#3567f0]';
            } else if (isPlayed) {
              bgColor = 'bg-[#ac2426]';
            }
          } else {
            bgColor = 'bg-[#3567f0]';
          }
        } else if (isPlayed) {
          bgColor = hasTargets ? 'bg-[#ac2426]' : 'bg-[#3567f0]';
        }

        const heightClass = PLAYED_HEIGHT_MAP[playedLevel] || 'h-[50%]';

        return (
          <div
            className={`flex flex-col text-center items-center justify-center w-[2.5em] text-[0.8em] ${heightClass} bg-[#303030] transition-[height] duration-200 leading-[1em] gap-y-[0.5em] ${bgColor} ${
              activeAs || targetAs ? 'font-bold' : ''
            }`}
            key={i}
          >
            {activeAs || targetAs ? (
              <span>{activeAs || targetAs}</span>
            ) : (
              [<span key="0">{i}</span>, <span key="1">{INTERVALS.OCTAVE[index]}</span>]
            )}
          </div>
        );
      })}
    </div>
  );
};

ChordIntervals.defaultProps = {
  className: undefined,
  intervals: [],
  targets: [],
  pitchClasses: [],
  tonic: null,
  quizMode: false,
};

export default ChordIntervals;
