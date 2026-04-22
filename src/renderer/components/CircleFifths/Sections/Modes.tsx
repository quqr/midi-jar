import React, { memo } from 'react';

import { Section, CircleOfFifthsConfig } from '../types';
import {
  CX,
  CY,
  DEGREE_COLORS,
  MODE_OFFSETS,
  MODE_NAMES,
  drawArc,
  drawLineSeparator,
} from '../utils';

type ModesProps = {
  section: Section;
  config: CircleOfFifthsConfig;
};

const Modes: React.FC<ModesProps> = ({ section, config }) => {
  let scale = 'major';

  if (config?.scale === 'major' && config?.displayMajor) {
    scale = 'major';
  }

  if (
    (config?.scale === 'minor' && config?.displayMinor) ||
    (config?.scale === 'major' && !config.displayMajor)
  ) {
    scale = 'minor';
  }

  const scaleOffset = scale === 'minor' ? -3 : 0;

  return (
    <g className="modes">
      {MODE_OFFSETS.map((offset, index) => {
        return (
          <g className="mode" key={index}>
            <path
              id={`mode_${index}_followpath`}
              className="followPath"
              d={drawArc(
                CX,
                CY,
                section.middle,
                (offset + scaleOffset - 0.5) / 12,
                (offset + scaleOffset + 0.5) / 12
              )}
            />
            <path
              className="modeSeparator"
              d={drawLineSeparator(
                CX,
                CY,
                section.start,
                section.end,
                (offset + scaleOffset - 0.5) / 12
              )}
              fill={DEGREE_COLORS[index]}
            />
            <text fontSize="1.6" textAnchor="start">
              <textPath href={`#mode_${index}_followpath`} startOffset="2%">
                {MODE_NAMES[index]}
              </textPath>
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default memo(Modes);
