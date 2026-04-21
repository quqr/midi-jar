import React from 'react';

export type NavTabProps = {
  caseSensitive?: boolean;
  end?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
