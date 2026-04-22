import React from 'react';
import classNames from 'classnames';

import { KeyboardSizes } from './constants';

import './classic.css';

type BlackNoteProps = {
  name: string;
  displayName: string;
  chroma: number;
  midi: number;
  offset: number;
  keyName: 'none' | 'octave' | 'pitchClass' | 'note';
  sizes: KeyboardSizes;
};

const BlackNote: React.FC<BlackNoteProps> = ({
  name,
  displayName,
  chroma,
  midi,
  offset,
  keyName,
  sizes,
}) => {
  return (
    <g
      className={classNames('note', 'black', `note-${name}`, `chroma-${chroma}`, `midi-${midi}`)}
      transform={`translate(${offset},0)`}
    >
      <rect
        className="pianoKeyBackground"
        width={sizes.BLACK_WIDTH}
        height={sizes.BLACK_HEIGHT + sizes.RADIUS}
        x="0"
        y={-sizes.RADIUS}
        rx={sizes.RADIUS}
        ry={sizes.RADIUS}
      />
      <rect
        className="pianoKey"
        width={sizes.BLACK_WIDTH}
        height={sizes.BLACK_HEIGHT + sizes.RADIUS}
        x="0"
        y={-sizes.RADIUS}
        rx={sizes.RADIUS}
        ry={sizes.RADIUS}
      />
      <circle
        className="pianoTonic"
        cx={sizes.BLACK_WIDTH / 2}
        cy={sizes.BLACK_HEIGHT - sizes.BLACK_INFO_OFFSET}
        r={sizes.TONIC_RADIUS}
      />
      <text
        className={classNames(['pianoInfo', 'pianoInfo'])}
        x={sizes.BLACK_WIDTH / 2}
        y={sizes.BLACK_HEIGHT - sizes.BLACK_INFO_OFFSET}
        textAnchor="middle"
        alignmentBaseline="mathematical"
      />
      {keyName !== 'none' && (
        <text
          className="pianoKeyName"
          x={sizes.BLACK_WIDTH / 2}
          y={sizes.BLACK_HEIGHT - sizes.BLACK_NAME_OFFSET}
          textAnchor="middle"
          alignmentBaseline="baseline"
        >
          {displayName}
        </text>
      )}
    </g>
  );
};

export default BlackNote;
