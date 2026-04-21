import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import styles from './ChordDetail.module.scss';

const cx = classnames.bind(styles);

type Props = {
  chordName?: string;
};

export const EmptyChordDetail: React.FC<Props> = ({ chordName }) => {
  const { t } = useTranslation();

  return (
    <div className={cx('empty', 'max-w-sm mx-auto px-4')}>
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
