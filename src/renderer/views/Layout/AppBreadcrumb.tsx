import React, { Fragment } from 'react';
import classnames from 'classnames/bind';
import { Breadcrumb, BreadcrumbItem } from '@la-jarre-a-son/ui';
import { useTranslation } from 'react-i18next';

import { NavLink, Params, useMatches } from 'react-router-dom';

import { Icon } from 'renderer/components';
import styles from './Layout.module.scss';

type CallableTitle = (params: Params) => string | React.ReactNode;

type MatchWithHandle = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    title?: string | CallableTitle;
    icon?: React.ReactNode;
    hasSettings?: boolean;
  };
};

const cx = classnames.bind(styles);

const AppBreadcrumb: React.FC = () => {
  const matches = useMatches() as unknown as MatchWithHandle[];
  const { t } = useTranslation();

  const crumbs = matches
    .map((match) => {
      let title: string | React.ReactNode;
      const rawTitle = match.handle?.title;

      if (typeof rawTitle === 'function') {
        title = rawTitle(match.params);
      } else if (typeof rawTitle === 'string' && rawTitle.includes('.')) {
        title = t(rawTitle, { moduleId: match.params.moduleId });
      } else {
        title = rawTitle || '';
      }

      return {
        title,
        icon: match.handle?.icon,
        path: match.pathname,
        hasSettings: !!match.handle?.hasSettings,
      };
    })
    .filter((crumb) => Boolean(crumb.title));

  return (
    <Breadcrumb>
      {crumbs.map(({ title, icon, path, hasSettings }, index) => (
        <Fragment key={index}>
          <BreadcrumbItem
            as={NavLink}
            to={path}
            aria-label={typeof title === 'string' ? title : ''}
          >
            {icon}
            <span className={cx('label')}>{title}</span>
          </BreadcrumbItem>
          {hasSettings && (
            <BreadcrumbItem as={NavLink} to={`${path}/settings`} aria-label={t('common.settings')}>
              <Icon name="settings" />
            </BreadcrumbItem>
          )}
        </Fragment>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
