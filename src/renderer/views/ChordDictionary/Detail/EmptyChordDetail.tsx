import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Box, Container } from '@la-jarre-a-son/ui';
import styles from './ChordDetail.module.scss';

const cx = classnames.bind(styles);

type Props = {
  chordName?: string;
};

export const EmptyChordDetail: React.FC<Props> = ({ chordName }) => {
  const { t } = useTranslation();

  return (
    <Container className={cx('empty')} size="sm">
      {chordName ? (
        <Box elevation={2} pad="lg">
          {t('chordDictionary.cannotFindChord', { chordName })}
        </Box>
      ) : (
        <Box elevation={2} pad="lg">
          {t('chordDictionary.emptyHelp')}
        </Box>
      )}
    </Container>
  );
};

EmptyChordDetail.defaultProps = { chordName: undefined };

export default EmptyChordDetail;
