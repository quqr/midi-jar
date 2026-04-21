import React from 'react';

export type InputNumberProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  className?: string;
  value: string | number;
  onChange: (value: number) => unknown;
  block?: boolean;
  withOctave?: boolean;
  learn?: boolean;
};
