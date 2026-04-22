import React, { useMemo } from 'react';

import { NavLink } from 'react-router-dom';
import { ChordNameLinkProps } from './types';

import { ChordName } from '../ChordName/ChordName';

export const ChordNameLink: React.FC<ChordNameLinkProps> = ({
  className,
  chord,
  dictionaryUrl,
  ...rest
}) => {
  const to = useMemo(
    () => (chord ? `${dictionaryUrl}${encodeURIComponent(chord.tonic + chord.aliases[0])}` : ''),
    [chord, dictionaryUrl]
  );

  if (!chord) return null;

  return (
    <NavLink className={`link [ --Link--primary_color:currentColor ] ${className ?? ''}`} to={to}>
      <ChordName chord={chord} {...rest} />
    </NavLink>
  );
};

ChordNameLink.defaultProps = {
  dictionaryUrl: '/chord-dictionary/',
};

export default ChordNameLink;
