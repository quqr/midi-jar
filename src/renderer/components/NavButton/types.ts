import React from 'react';

export type NavButtonProps = {
  caseSensitive?: boolean;
  end?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
