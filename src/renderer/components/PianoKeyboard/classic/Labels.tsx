import React from 'react';
import classNames from 'classnames';

import { KeyboardKeys } from './types';

import './classic.css';
import { KeyboardSizes } from './constants';

type Props = {
  keys: KeyboardKeys;
  sizes: KeyboardSizes;
};

const Board: React.FC<Props> = ({ keys, sizes }) => (
  <g className="labels" transform="translate(0,0)">
    {keys.labels.map(({ note, labelOffset }) => (
      <text
        key={note.midi}
        className={classNames(['pianoLabel', `label-${note.midi}`])}
        x={labelOffset}
        y={sizes.LABEL_HEIGHT - sizes.LABEL_OFFSET}
        textAnchor="middle"
      />
    ))}
  </g>
);

export default Board;
