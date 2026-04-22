import React from 'react';

import { ChordName } from 'renderer/components';

import { ChordSearchOptionProps } from './types';

export const ChordSearchOption = React.forwardRef<HTMLLIElement, ChordSearchOptionProps>(
  (props, ref) => {
    const { chord, parts, onSelect, selected, className, ...otherProps } = props;
    const value = chord.tonic + chord.aliases[0];

    return (
      <li ref={ref} className={className} {...otherProps}>
        <button
          type="button"
          className={`btn btn-ghost btn-block justify-start ${selected ? 'btn-active' : ''}`}
          onClick={() => onSelect?.(value)}
        >
          <ChordName chord={chord} />
          {parts && (
            <div className="flex flex-col items-start gap-0">
              <span className="px-[1px] bg-success-normal rounded-l-[3px]">{parts[0]}</span>
              <span className="px-[1px] italic">{parts[1]}</span>
            </div>
          )}
        </button>
      </li>
    );
  }
);

ChordSearchOption.displayName = 'ChordSearchOption';

export default React.memo(ChordSearchOption);
