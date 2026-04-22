import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Chord } from 'tonal';
import { Chord as TChord } from '@tonaljs/chord';

import { isSameChord } from 'renderer/helpers';

import { Icon } from 'renderer/components';

import { ChordSearchProps } from './types';
import { searchChords } from './utils';
import { ChordSearchOption } from './ChordSearchOption';

export const ChordSearch: React.FC<ChordSearchProps> = ({ className, onSelect }) => {
  const [search, setSearch] = useState<string>('');
  const [previousChords, setPreviousChords] = useState<TChord[]>([]);
  const { t } = useTranslation();

  const options = useMemo(() => searchChords(search), [search]);

  const handleSelect = useCallback(
    (val: string | null) => {
      if (val) {
        onSelect(val);
        const chord = Chord.get(val);
        setPreviousChords((prev) =>
          [chord, ...prev.filter((c) => !isSameChord(c, chord))].slice(0, 10)
        );
      }
    },
    [onSelect]
  );

  return (
    <div className={className}>
      <details className="dropdown dropdown-end">
        <summary className="input input-bordered w-full flex items-center gap-2 cursor-pointer">
          <Icon name="search" />
          <span className="truncate">{search || t('chordDictionary.searchChord')}</span>
        </summary>
        <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-64 mt-1">
          <li className="p-3">
            <label
              htmlFor="chordSearchInput"
              className="input input-bordered input-sm flex items-center gap-2 w-full"
            >
              <Icon name="search" />
              <input
                id="chordSearchInput"
                type="text"
                className="grow"
                placeholder={t('chordDictionary.typeChord')}
                aria-label={t('chordDictionary.typeChord')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </li>
          <li>
            <div className="menu-title">
              {search ? t('chordDictionary.matches') : t('chordDictionary.previousChords')}
            </div>
            <ul>
              {search ? (
                <>
                  {options.map((option) => (
                    <ChordSearchOption
                      key={option.chord.tonic + option.chord.aliases[0]}
                      chord={option.chord}
                      parts={option.parts}
                      onSelect={handleSelect}
                    />
                  ))}
                  {!options.length && (
                    <li>
                      <span className="text-base-content/50">
                        {t('chordDictionary.noChordsFound')}
                      </span>
                    </li>
                  )}
                </>
              ) : (
                <>
                  {previousChords &&
                    previousChords.map((chord) => (
                      <ChordSearchOption
                        key={chord.tonic + chord.aliases[0]}
                        chord={chord}
                        onSelect={handleSelect}
                      />
                    ))}
                  {(!previousChords || !previousChords.length) && (
                    <li>
                      <span className="text-base-content/50">
                        {t('chordDictionary.noChordsInHistory')}
                      </span>
                    </li>
                  )}
                </>
              )}
            </ul>
          </li>
        </ul>
      </details>
    </div>
  );
};

ChordSearch.defaultProps = {
  className: undefined,
};

export default ChordSearch;
