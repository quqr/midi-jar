import React from 'react';

export type InputNoteProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  className?: string;
  value: string | null;
  onChange: (value: string) => unknown;
  withOctave?: boolean;
  learn?: boolean;
};
