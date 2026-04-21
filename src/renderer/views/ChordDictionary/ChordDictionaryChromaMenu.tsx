import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Note } from 'tonal';

import {
  KeySignatureConfig,
  NOTE_NAMES,
  formatSharpsFlats,
  getNoteInKeySignature,
} from 'renderer/helpers';

import styles from './ChordDictionary.module.scss';

const cx = classnames.bind(styles);

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
      className={cx('chromanav')}
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
            className={cx('tab', { 'btn-active': isSelected }, 'btn btn-ghost btn-block')}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(chroma)}
          >
            <span className={cx('label')}>
              {formatSharpsFlats(getNoteInKeySignature(note, keySignature.notes))}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ChordDictionaryChromaMenu;
