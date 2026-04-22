import React, { memo } from 'react';

import { formatSharpsFlats } from 'renderer/helpers/note';

import { Section } from '../types';
import { CX, CY, drawArc, isKeySelected } from '../utils';

type SectionAlterationProps = {
  value: number;
  current: number;
  label: string | string[];
  section: Section;
  tonic: string | undefined;
};

const SectionAlteration: React.FC<SectionAlterationProps> = ({
  value,
  current,
  label,
  section,
  tonic,
}) => {
  const labels = Array.isArray(label) ? label : [label];

  const renderFollowPath = (
    <path
      id={`alteration_${value}_followpath`}
      className="followPath"
      d={drawArc(CX, CY, section.middle, (value - 0.5) / 12, (value + 0.5) / 12)}
    />
  );

  if (labels.length > 1) {
    return (
      <g className={`alterations ${value === current ? 'alterations--selected' : ''}`}>
        {renderFollowPath}
        <text
          className={`${isKeySelected(value, 0, tonic) ? 'alteration--selected' : ''}`}
          fontSize="3"
          textAnchor="middle"
        >
          <textPath href={`#alteration_${value}_followpath`} startOffset="33%">
            {formatSharpsFlats(labels[0])}
          </textPath>
        </text>
        <text
          className={`${isKeySelected(value, 1, tonic) ? 'alteration--selected' : ''}`}
          fontSize="3"
          textAnchor="middle"
        >
          <textPath href={`#alteration_${value}_followpath`} startOffset="66%">
            {formatSharpsFlats(labels[1])}
          </textPath>
        </text>
      </g>
    );
  }

  return (
    <g className={`alterations ${value === current ? 'alterations--selected' : ''}`}>
      {renderFollowPath}
      <text className="alteration--selected" fontSize="3" textAnchor="middle">
        <textPath href={`#alteration_${value}_followpath`} startOffset="50%">
          {formatSharpsFlats(labels[0])}
        </textPath>
      </text>
    </g>
  );
};

export default memo(SectionAlteration);
