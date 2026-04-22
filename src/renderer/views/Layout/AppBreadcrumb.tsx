import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink, Params, useMatches } from 'react-router-dom';

import { Icon } from 'renderer/components';

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
    <div className="breadcrumbs text-sm">
      <ul className="gap-2">
        {crumbs.map(({ title, icon, path, hasSettings }, index) => (
          <Fragment key={index}>
            <li>
              <NavLink
                to={path}
                aria-label={typeof title === 'string' ? title : ''}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out
                   text-base-content/70 hover:text-base-content hover:bg-base-300/50
                   ${isActive ? 'active bg-base-300/60 text-base-content font-semibold' : ''}`
                }
              >
                {icon && <span className="flex-shrink-0">{icon}</span>}
                <span className="flex-1 truncate">{title}</span>
              </NavLink>
            </li>
            {hasSettings && (
              <li>
                <NavLink
                  to={`${path}/settings`}
                  aria-label={t('common.settings')}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ease-in-out
                     text-base-content/70 hover:text-base-content hover:bg-base-300/50
                     ${isActive ? 'active bg-base-300/60 text-base-content font-semibold' : ''}`
                  }
                >
                  <Icon name="settings" />
                </NavLink>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default AppBreadcrumb;
