import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ChordDictionarySettings } from 'main/types';

import { KeySignatureConfig } from 'renderer/helpers';

import { Icon } from 'renderer/components';
import { ChordGroup, ChordItem, getChordGroups } from './utils';

type Props = {
  keySignature: KeySignatureConfig;
  selected: string | null;
  onSelect: (note: string) => void;
  groupBy: ChordDictionarySettings['groupBy'];
  disabledChords: ChordDictionarySettings['disabled'];
  chroma: number | null;
  filterChordsInKey: boolean;
  hideDisabled: boolean;
};

const ChordDictionaryChordMenu: React.FC<Props> = ({
  keySignature,
  selected,
  onSelect,
  chroma,
  groupBy,
  disabledChords,
  hideDisabled,
  filterChordsInKey,
}) => {
  const { t } = useTranslation();

  const groups = useMemo(
    () =>
      getChordGroups(
        groupBy,
        keySignature,
        chroma,
        disabledChords,
        hideDisabled,
        filterChordsInKey
      ),
    [groupBy, disabledChords, hideDisabled, keySignature, chroma, filterChordsInKey]
  );

  const renderTreeViewGroup = (item: ChordGroup | ChordItem) => {
    return item.type === 'item' ? (
      <li
        key={item.chordType.aliases[0]}
        className={`transition-colors duration-150 hover:bg-white/5 ${
          item.isDisabled ? 'opacity-50' : ''
        }`}
      >
        <button
          type="button"
          className={`btn btn-ghost btn-block justify-start ${
            selected === item.chordType.aliases[0] ? 'btn-active' : ''
          }`}
          onClick={() => onSelect(item.chordType.aliases[0])}
          title={item.chordType.aliases[0]}
        >
          {item.isDisabled && <Icon name="hidden" />}
          <span className="truncate">{item.chordType.aliases[0]}</span>
        </button>
      </li>
    ) : (
      <li key={item.value}>
        <details open>
          <summary className="font-semibold px-3 py-2 sticky top-0 bg-base-100 z-10 transition-colors duration-150 hover:bg-white/5">
            {item.label}
          </summary>
          <ul className="pl-2">{item.items.map((i) => renderTreeViewGroup(i))}</ul>
        </details>
      </li>
    );
  };

  return (
    <nav className="h-full" aria-label={t('chordDictionary.chordTypesNavigation')}>
      <ul>{groups.map((item) => renderTreeViewGroup(item))}</ul>
    </nav>
  );
};

export default ChordDictionaryChordMenu;
