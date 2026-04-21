import React from 'react';

export type InputColorProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  className?: string;
  value: string | null;
  onChange: (value: string) => unknown;
  block?: boolean;
};
