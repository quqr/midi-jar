import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  chordName?: string;
};

export const EmptyChordDetail: React.FC<Props> = ({ chordName }) => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col items-center justify-center italic max-w-sm mx-auto px-4">
      {chordName ? (
        <div className="card bg-base-100 shadow-lg p-6">
          {t('chordDictionary.cannotFindChord', { chordName })}
        </div>
      ) : (
        <div className="card bg-base-100 shadow-lg p-6">{t('chordDictionary.emptyHelp')}</div>
      )}
    </div>
  );
};

EmptyChordDetail.defaultProps = { chordName: undefined };

export default EmptyChordDetail;
