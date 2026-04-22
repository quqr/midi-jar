import React, { memo } from 'react';
import { Chord } from '@tonaljs/chord';

import { getNoteInKeySignature, KeySignatureConfig } from 'renderer/helpers/note';

import { Section, CircleOfFifthsConfig } from '../types';
import { CX, CY, drawArc, drawSection, isChordPressed, formatLabel } from '../utils';

type SectionDominantsProps = {
  value: number;
  current: number;
  label: string | string[];
  section: Section;
  chord?: Chord | null;
  keySignature?: KeySignatureConfig;
  config: CircleOfFifthsConfig;
};

const SectionDominants: React.FC<SectionDominantsProps> = ({
  value,
  current,
  label,
  section,
  chord,
  keySignature,
  config,
}) => {
  const labels = Array.isArray(label) ? label : [label];

  return (
    <g className={`dominants ${current === value ? 'dominants--selected' : ''}`}>
      {labels.map((l: string, index: number) => {
        const angleStart = (value - 0.5 + index / labels.length) / 12;
        const angleEnd = (value - 0.5 + (index + 1) / labels.length) / 12;
        return (
          <g
            key={l}
            className={`${isChordPressed(l, 'dom', chord, config) ? 'dominant--active' : ''} ${
              config?.highlightInScale && index === 0 && current === value
                ? 'dominant--isInScale'
                : ''
            }`}
          >
            <path
              id={`dominants_${value}_${index}_followpath`}
              className="followPath"
              d={drawArc(CX, CY, section.middle, angleStart, angleEnd)}
            />
            <path
              className="sector"
              d={drawSection(CX, CY, section.start, section.end, angleStart, angleEnd)}
              strokeWidth="0.5"
            />
            <text fontSize="2" textAnchor="middle">
              <textPath href={`#dominants_${value}_${index}_followpath`} startOffset="50%">
                {formatLabel(
                  keySignature ? getNoteInKeySignature(l, keySignature.notes) : l,
                  'dom'
                )}
              </textPath>
            </text>
          </g>
        );
      })}
    </g>
  );
};

SectionDominants.defaultProps = {
  chord: undefined,
  keySignature: undefined,
};

export default memo(SectionDominants);
