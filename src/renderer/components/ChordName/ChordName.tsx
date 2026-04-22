import React from 'react';

import { formatSharpsFlats } from 'renderer/helpers/note';
import {
  tokenizeChord,
  tokenizeChordType,
  formatQuality,
  ALIAS_NOTATION,
} from 'renderer/helpers/chords';

import { useChordDictionary } from 'renderer/contexts/ChordDictionary';
import { ChordNameProps } from './types';

function getChordSymbol(
  chord: ChordNameProps['chord'],
  notation: 'long' | 'short' | 'symbol' | number
) {
  if (!chord) {
    return '';
  }

  if (typeof notation === 'string') {
    if (chord.aliases[ALIAS_NOTATION[notation]] !== undefined) {
      return chord.tonic + chord.aliases[ALIAS_NOTATION[notation]];
    }
  } else if (typeof notation === 'number' && chord.aliases[notation] !== undefined) {
    return chord.tonic + chord.aliases[notation];
  }

  if (chord.aliases[ALIAS_NOTATION.short] !== undefined) {
    return chord.tonic + chord.aliases[ALIAS_NOTATION.short];
  }
  return chord.symbol;
}

export const ChordName: React.FC<ChordNameProps> = ({
  className,
  chord,
  notation = 'preferred',
  hideRoot,
  highlightAlterations,
  latinSharpsFlats,
}) => {
  const { aliases, defaultNotation } = useChordDictionary();

  if (!chord) return null;

  const preferredAlias = aliases.get(chord.aliases[0]);

  const symbol =
    notation === 'preferred' && preferredAlias !== undefined
      ? chord.tonic + preferredAlias
      : getChordSymbol(chord, notation === 'preferred' ? defaultNotation : notation);

  if (!symbol) return null;

  const [tonic, type] = tokenizeChord(symbol);
  const tokens = tokenizeChordType(type);
  const [first, ...rest] = tokens;

  return (
    <div
      className={`inline-flex items-end h-[1.5em] leading-[1.5em] align-bottom ${className ?? ''}`}
    >
      <span className="font-bold">{latinSharpsFlats ? tonic : formatSharpsFlats(tonic)}</span>
      <span className="text-[0.9em] leading-[1.5em]">
        <span
          className={`mx-[0.05em] font-bold italic ${
            highlightAlterations ? 'bg-red-500 rounded-[0.1em]' : ''
          }`}
        >
          {formatQuality(first)}
        </span>
        {rest.map((part, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span
            className={`mx-[0.05em] align-super italic text-[0.8em] ${
              highlightAlterations ? 'bg-blue-500 rounded-[0.1em]' : ''
            }`}
            key={`${part}_${index}`}
          >
            {latinSharpsFlats ? part : formatSharpsFlats(part)}
          </span>
        ))}
      </span>
      {!hideRoot && chord.root && (
        <span className="leading-[1.5em] ml-[0.25em] text-[0.6em] opacity-50">
          /{latinSharpsFlats ? chord.root : formatSharpsFlats(chord.root)}
        </span>
      )}
    </div>
  );
};

ChordName.defaultProps = {
  className: undefined,
  chord: null,
  notation: 'preferred',
  highlightAlterations: false,
  hideRoot: false,
  latinSharpsFlats: undefined,
};

export default ChordName;
