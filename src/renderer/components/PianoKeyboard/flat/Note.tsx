import React from 'react';

import { KeyboardSizes } from './constants';

type NoteProps = {
  name: string;
  sizes: KeyboardSizes;
  displayName: string;
  chroma: number;
  midi: number;
  offset: number;
  keyName: 'none' | 'octave' | 'pitchClass' | 'note';
  isBlack: boolean;
};

const WhiteNote: React.FC<NoteProps> = ({
  name,
  sizes,
  displayName,
  chroma,
  midi,
  offset,
  keyName,
  isBlack,
}) => (
  <g
    className={`note ${isBlack ? 'black' : 'white'} note-${name} chroma-${chroma} midi-${midi}`}
    transform={`translate(${offset},0)`}
  >
    <rect className="pianoKey" width={sizes.WIDTH} height={sizes.HEIGHT} x="0" y="0" />
    <circle
      className="pianoTonic"
      cx={sizes.WIDTH / 2}
      cy={sizes.HEIGHT - sizes.INFO_OFFSET}
      r={sizes.TONIC_RADIUS}
    />
    <text
      className="pianoInfo"
      x={sizes.WIDTH / 2}
      y={sizes.HEIGHT - sizes.INFO_OFFSET}
      textAnchor="middle"
      alignmentBaseline="mathematical"
    />
    {keyName !== 'none' && (
      <text
        className="pianoKeyName"
        x={sizes.WIDTH / 2}
        y={sizes.HEIGHT - sizes.NAME_OFFSET}
        textAnchor="middle"
        alignmentBaseline="mathematical"
      >
        {displayName}
      </text>
    )}
  </g>
);

export default WhiteNote;
