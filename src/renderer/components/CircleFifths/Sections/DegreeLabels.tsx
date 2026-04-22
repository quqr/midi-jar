import React, { memo } from 'react';

import { range } from 'renderer/helpers';

import { Sections, CircleOfFifthsConfig } from '../types';
import { getDegreePosition } from '../utils';

import DegreeLabel from './DegreeLabel';

type DegreeLabelsProps = {
  scale: 'major' | 'minor';
  sections: Sections;
  config?: CircleOfFifthsConfig;
};

const DegreeLabels: React.FC<DegreeLabelsProps> = ({ scale, sections, config }) => {
  return (
    <g className="degreeLabels pointer-events-none">
      {range(0, 6).map((degree) => {
        const position = getDegreePosition(scale, degree, config);

        if (!position) return null;

        const [sectionType, offset, label] = position;
        const section = sections[sectionType];
        const displaySuspended =
          (sectionType === 'major' || sectionType === 'minor') && config?.displaySuspended;

        return (
          <DegreeLabel
            key={label}
            anchor={scale === 'minor' ? 'right' : 'left'}
            offset={offset}
            section={section}
            label={label}
            displaySuspended={displaySuspended}
          />
        );
      })}
    </g>
  );
};

DegreeLabels.defaultProps = {
  config: {},
};

export default memo(DegreeLabels);
