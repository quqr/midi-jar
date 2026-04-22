import React, { memo, useCallback } from 'react';
import { Chord } from '@tonaljs/chord';

import { KeySignatureConfig } from 'renderer/helpers/note';

import { Section, CircleOfFifthsConfig } from '../types';
import {
  CX,
  CY,
  SUSPENDED_OFFSET,
  polar,
  drawSection,
  isInScale,
  isChordPressed,
  isNotePressed,
  isMainSection,
} from '../utils';

import SectionLabel from './Label';

type SectionMinorProps = {
  label: string[];
  value: number;
  current: number;
  rotation: number;
  section: Section;
  onClick: (value: number) => void;
  chord?: Chord | null;
  notes?: string[];
  keySignature?: KeySignatureConfig;
  config: CircleOfFifthsConfig;
};

const SectionMinor: React.FC<SectionMinorProps> = ({
  label,
  value,
  current,
  rotation,
  chord,
  notes,
  keySignature,
  onClick,
  section,
  config,
}) => {
  const suspendedOffset = config.displaySuspended ? SUSPENDED_OFFSET : 0;

  const handleClick = useCallback(() => onClick(value), [value, onClick]);

  return (
    <g
      className={`key key--minor ${isMainSection('minor', config) ? 'key--isMainSection' : ''} ${
        value === current ? 'key--selected' : ''
      } ${config?.highlightInScale && isInScale(current, value) ? 'key--isInScale' : ''} ${
        config.highlightSector === 'notes'
          ? isNotePressed(label[0], notes)
          : isChordPressed(label[0], 'minor', chord, config)
          ? 'key--active'
          : ''
      } ${label.length > 1 ? 'key--multiple' : ''}`}
      onClick={handleClick}
    >
      <path
        className="sector"
        d={drawSection(
          CX,
          CY,
          section.start,
          section.end,
          (value - (0.5 - suspendedOffset)) / 12,
          (value + (0.5 - suspendedOffset)) / 12
        )}
        strokeWidth="0.5"
      />
      <circle
        className="badge"
        cx={polar(CX, CY, section.middle, value / 12)[0]}
        cy={polar(CX, CY, section.middle, value / 12)[1]}
        r="3.6"
      />
      <SectionLabel
        rotation={rotation}
        radius={section.middle}
        value={value}
        fontSize={4}
        label={label}
        tonic={keySignature?.tonic}
        quality="minor"
      />
    </g>
  );
};

SectionMinor.defaultProps = {
  chord: undefined,
  notes: undefined,
  keySignature: undefined,
};

export default memo(SectionMinor);
