import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Box, List } from '@la-jarre-a-son/ui';

import { CreditsProps } from './types';
import CreditItem from './CreditItem';

import styles from './Credits.module.scss';

const cx = classNames.bind(styles);

const Credits: React.FC<CreditsProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <Box className={cx('base')} outlined elevation={1}>
      <List as="table" className={cx('table')}>
        <thead>
          <tr>
            <th>{t('settings.aboutSettings.credits.name')}</th>
            <th>{t('settings.aboutSettings.credits.description')}</th>
            <th>{t('settings.aboutSettings.credits.links')}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((credit) => (
            <CreditItem key={credit.name} {...credit} />
          ))}
        </tbody>
      </List>
    </Box>
  );
};

export default Credits;
