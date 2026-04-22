import React, { useCallback } from 'react';

import { InputColorProps } from './types';

const COLOR_CHARS = '0 1 2 3 4 5 6 7 8 9 a b c d e f'.split(' ');

export const InputColor: React.FC<InputColorProps> = ({ className, value, onChange, ...rest }) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!value && event.key === '#') return;

      if (
        value &&
        value.startsWith('#') &&
        value.length < 7 &&
        COLOR_CHARS.includes(event.key.toLowerCase())
      )
        return;
      event.preventDefault();
    },
    [value]
  );

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue } = event.target;

      onChange(newValue.toLowerCase());
    },
    [onChange]
  );

  const handleTextChange = useCallback(
    (newValue: string) => {
      onChange(newValue.toLowerCase());
    },
    [onChange]
  );

  return (
    <div className="relative">
      <input
        className="absolute top-0 left-0 w-8 h-full opacity-0 cursor-pointer"
        type="color"
        onChange={handleColorChange}
        value={value ?? ''}
      />
      <input
        className={`input input-bordered w-full pl-10 w-[7ch] font-mono ${className ?? ''}`}
        value={value ?? ''}
        onKeyPress={handleKeyPress}
        onChange={(e) => handleTextChange(e.target.value)}
        type="text"
        {...rest}
      />
    </div>
  );
};

InputColor.defaultProps = {
  className: undefined,
};

export default InputColor;
