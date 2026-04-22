import React, { memo } from 'react';

import { Section } from '../types';
import { CX, CY, polar, drawRegularPolygon } from '../utils';

type ArrowProps = {
  section: Section;
};

const Arrow: React.FC<ArrowProps> = ({ section }) => {
  const radius = section.start - 2;
  const origin = polar(CX, CY, radius, 0);

  return (
    <polygon
      points={drawRegularPolygon(3, origin[0], origin[1], 2, 0)}
      className="fill-[#999999]"
    />
  );
};

export default memo(Arrow);
