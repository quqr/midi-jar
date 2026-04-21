import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Icon } from 'renderer/components';

import { CreditItemProps } from './types';

import styles from './Credits.module.scss';

const cx = classNames.bind(styles);

const CreditItem: React.FC<CreditItemProps> = ({ name, description, links }) => {
  const { t } = useTranslation();

  return (
    <tr className={cx('item')}>
      <td className={cx('name')}>{name}</td>
      <td className={cx('description')}>{description}</td>
      <td className={cx('links')}>
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer" className="link">
            <Icon name="github" /> {t('settings.aboutSettings.credits.github')}
          </a>
        )}
        {links.github && links.website && ' - '}
        {links.website && (
          <a href={links.website} target="_blank" rel="noreferrer" className="link">
            {t('settings.aboutSettings.credits.website')}
          </a>
        )}
      </td>
    </tr>
  );
};

export default CreditItem;
