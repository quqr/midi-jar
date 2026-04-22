import React, { memo } from 'react';

import { CX, CY, polar, cPolar, isKeySelected, formatLabel } from '../utils';

type SectionLabelProps = {
  value: number;
  label: string | string[];
  rotation: number;
  radius: number;
  fontSize: number;
  tonic?: string;
  quality: string;
};

const SectionLabel: React.FC<SectionLabelProps> = ({
  value,
  label,
  rotation,
  radius,
  fontSize,
  tonic,
  quality,
}) => {
  const labels = Array.isArray(label) ? label : [label];

  if (labels.length > 1) {
    return (
      <>
        <text
          className={`name ${isKeySelected(value, 0, tonic) ? 'name--selected' : ''}`}
          x={polar(CX, CY, radius, value / 12)[0]}
          y={polar(CX, CY, radius, value / 12)[1]}
          textAnchor="middle"
          fontSize={fontSize / 1.5}
          dy={-0.1 * fontSize}
          dx={-0.25 * fontSize}
          transform={`rotate(${rotation}, ${cPolar(CX, CY, radius, value / 12)})`}
        >
          {formatLabel(labels[0], quality)}
        </text>
        <text
          className={`name ${isKeySelected(value, 1, tonic) ? 'name--selected' : ''}`}
          x={polar(CX, CY, radius, value / 12)[0]}
          y={polar(CX, CY, radius, value / 12)[1]}
          textAnchor="middle"
          fontSize={fontSize / 1.5}
          dy={0.6 * fontSize}
          dx={0.25 * fontSize}
          transform={`rotate(${rotation}, ${cPolar(CX, CY, radius, value / 12)})`}
        >
          {formatLabel(labels[1], quality)}
        </text>
      </>
    );
  }

  return (
    <text
      className="name"
      x={polar(CX, CY, radius, value / 12)[0]}
      y={polar(CX, CY, radius, value / 12)[1]}
      textAnchor="middle"
      fontSize={fontSize}
      dy={0.33 * fontSize}
      transform={`rotate(${rotation}, ${cPolar(CX, CY, radius, value / 12)})`}
    >
      {formatLabel(labels[0], quality)}
    </text>
  );
};

SectionLabel.defaultProps = {
  tonic: undefined,
};

export default memo(SectionLabel);
