import React from 'react';

import { IconProps } from './types';
import ICONS from './icons';

const INTENT_MAP: Record<string, string> = {
  neutral: 'text-gray-500',
  primary: 'text-blue-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  success: 'text-green-500',
  default: 'text-white',
  subtle: 'text-gray-300',
  contrast: 'text-gray-900',
  inherit: 'text-inherit',
};

export const Icon: React.FC<IconProps> = ({ className, name, intent, spin, hover }) => {
  const IconSvg = ICONS[name];

  if (!IconSvg) return null;

  const intentClass = intent && INTENT_MAP[intent] ? INTENT_MAP[intent] : INTENT_MAP.inherit;
  const hoverClass = hover
    ? 'group-hover:opacity-80 hover:opacity-80 active:opacity-50 focus:opacity-50'
    : '';
  const spinClass = spin || name === 'loading' ? 'animate-spin' : '';

  return (
    <IconSvg
      className={`inline-block w-[1em] h-[1em] leading-[1em] align-[-0.13em] flex-shrink-0 *:!fill-current *:opacity-100 *:[transition:fill_300ms_cubic-bezier(.4,0,.2,1),opacity_300ms_cubic-bezier(.4,0,.2,1)] ${intentClass} ${hoverClass} ${spinClass} ${
        className ?? ''
      }`}
    />
  );
};

Icon.defaultProps = {
  className: undefined,
  intent: 'inherit',
  spin: false,
  hover: false,
};

export default Icon;
