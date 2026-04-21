import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { CreditsProps } from './types';
import CreditItem from './CreditItem';

import styles from './Credits.module.scss';

const cx = classNames.bind(styles);

const Credits: React.FC<CreditsProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cx('base')}
      style={{
        border: '1px solid var(--fallback-bc, oklch(var(--bc)/0.1))',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--fallback-b2, oklch(var(--b2)))',
      }}
    >
      <table className={cx('table')}>
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
      </table>
    </div>
  );
};

export default Credits;
