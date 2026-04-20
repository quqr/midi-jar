import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Link, ListItem } from '@la-jarre-a-son/ui';
import { Icon } from 'renderer/components';

import { CreditItemProps } from './types';

import styles from './Credits.module.scss';

const cx = classNames.bind(styles);

const CreditItem: React.FC<CreditItemProps> = ({ name, description, links }) => {
  const { t } = useTranslation();

  return (
    <ListItem as="tr" className={cx('item')}>
      <td className={cx('name')}>{name}</td>
      <td className={cx('description')}>{description}</td>
      <td className={cx('links')}>
        {links.github && (
          <Link href={links.github} target="_blank" rel="noreferrer">
            <Icon name="github" /> {t('settings.aboutSettings.credits.github')}
          </Link>
        )}
        {links.github && links.website && ' - '}
        {links.website && (
          <Link href={links.website} target="_blank" rel="noreferrer">
            {t('settings.aboutSettings.credits.website')}
          </Link>
        )}
      </td>
    </ListItem>
  );
};

export default CreditItem;
