import React from 'react';
import classnames from 'classnames/bind';

import { ChordName } from 'renderer/components';

import { ChordSearchOptionProps } from './types';

import styles from './ChordSearch.module.scss';

const cx = classnames.bind(styles);

export const ChordSearchOption = React.forwardRef<HTMLLIElement, ChordSearchOptionProps>(
  (props, ref) => {
    const { chord, parts, onSelect, selected, className, ...otherProps } = props;
    const value = chord.tonic + chord.aliases[0];

    return (
      <li ref={ref} className={cx(parts ? 'option' : 'history', className)} {...otherProps}>
        <button
          type="button"
          className={`btn btn-ghost btn-block justify-start ${selected ? 'btn-active' : ''}`}
          onClick={() => onSelect?.(value)}
        >
          <ChordName chord={chord} />
          {parts && (
            <div className={cx('resultParts')}>
              <span className={cx('resultMatch')}>{parts[0]}</span>
              <span className={cx('resultRest')}>{parts[1]}</span>
            </div>
          )}
        </button>
      </li>
    );
  }
);

ChordSearchOption.displayName = 'ChordSearchOption';

export default React.memo(ChordSearchOption);
