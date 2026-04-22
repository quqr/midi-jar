import React from 'react';
import { useTranslation } from 'react-i18next';
import { Note } from 'tonal';

import {
  KeySignatureConfig,
  NOTE_NAMES,
  formatSharpsFlats,
  getNoteInKeySignature,
} from 'renderer/helpers';

type Props = {
  keySignature: KeySignatureConfig;
  selected: number | null;
  onSelect: (chroma: number) => void;
  filterChordsInKey: boolean;
};

const ChordDictionaryChromaMenu: React.FC<Props> = ({
  keySignature,
  selected,
  onSelect,
  filterChordsInKey,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col gap-2 p-3"
      role="tablist"
      aria-label={t('chordDictionary.chromaNavigation')}
    >
      {(filterChordsInKey ? keySignature.scale : NOTE_NAMES).map((note) => {
        const chroma = Note.chroma(note) as number;
        const isSelected = selected === chroma;

        return (
          <button
            key={note}
            type="button"
            className={`btn btn-ghost btn-block rounded-md p-2 px-4 mb-1 transition-colors duration-150 hover:bg-white/10 ${
              isSelected ? 'bg-primary-500 text-white shadow-md' : ''
            }`}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(chroma)}
          >
            <span className="font-medium">
              {formatSharpsFlats(getNoteInKeySignature(note, keySignature.notes))}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ChordDictionaryChromaMenu;
