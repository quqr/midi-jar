import React from 'react';
import classNames from 'classnames';

import { KeyboardSizes } from './constants';

import './classic.css';

type WhiteNoteProps = {
  name: string;
  displayName: string;
  chroma: number;
  midi: number;
  offset: number;
  keyName: 'none' | 'octave' | 'pitchClass' | 'note';
  sizes: KeyboardSizes;
};

const WhiteNote: React.FC<WhiteNoteProps> = ({
  name,
  displayName,
  chroma,
  midi,
  offset,
  keyName,
  sizes,
}) => (
  <g
    className={classNames('note', 'white', `note-${name}`, `chroma-${chroma}`, `midi-${midi}`)}
    transform={`translate(${offset},0)`}
  >
    <rect
      className="pianoKeyBackground"
      width={sizes.WHITE_WIDTH}
      height={sizes.WHITE_HEIGHT + sizes.RADIUS}
      x="0"
      y={-sizes.RADIUS}
      rx={sizes.RADIUS}
      ry={sizes.RADIUS}
    />
    <rect
      className="pianoKey"
      width={sizes.WHITE_WIDTH}
      height={sizes.WHITE_HEIGHT + sizes.RADIUS}
      x="0"
      y={-sizes.RADIUS}
      rx={sizes.RADIUS}
      ry={sizes.RADIUS}
    />
    <circle
      className="pianoTonic"
      cx={sizes.WHITE_WIDTH / 2}
      cy={sizes.WHITE_HEIGHT - sizes.WHITE_INFO_OFFSET}
      r={sizes.TONIC_RADIUS}
    />
    <text
      className={classNames(['pianoInfo', 'pianoInfo'])}
      x={sizes.WHITE_WIDTH / 2}
      y={sizes.WHITE_HEIGHT - sizes.WHITE_INFO_OFFSET}
      textAnchor="middle"
      alignmentBaseline="mathematical"
    />
    {keyName !== 'none' && (
      <text
        className="pianoKeyName"
        x={sizes.WHITE_WIDTH / 2}
        y={sizes.WHITE_HEIGHT - sizes.WHITE_NAME_OFFSET}
        textAnchor="middle"
        alignmentBaseline="baseline"
      >
        {displayName}
      </text>
    )}
  </g>
);

export default WhiteNote;
