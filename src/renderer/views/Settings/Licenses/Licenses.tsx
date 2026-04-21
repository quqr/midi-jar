import React, { Fragment, useState } from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Icon } from 'renderer/components';

import ThirdPartyLicenses from '../../../../../ThirdPartyLicenses.json';

import styles from './Licenses.module.scss';

const cx = classnames.bind(styles);

type Package = {
  id: string;
  name: string;
  version: string;
  url?: string;
  license: string;
  text: string;
};

const Licenses: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const { t } = useTranslation();

  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();

  const handleClick = (id: string) => () => {
    setOpen((p) => (p === id ? null : id));
  };

  return (
    <ul className="divide-y divide-base-300">
      {(ThirdPartyLicenses as Package[]).map((p: Package) => (
        <Fragment key={p.id}>
          <li className="flex items-center justify-between p-4 cursor-pointer hover:bg-base-200 transition-colors">
            <button
              type="button"
              className="flex items-center justify-between w-full"
              onClick={handleClick(p.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick(p.id)();
              }}
            >
              <div className="flex flex-col gap-2 flex-1">
                <div className={cx('packageName')}>{p.name}</div>
                <span className={`badge badge-sm ${cx('packageType')}`}>{p.license}</span>
                <div className={cx('packageVersion')}>{p.version}</div>
              </div>
              <div className="flex items-center gap-2">
                {p.url && (
                  <a
                    className={`btn btn-sm btn-neutral ${cx('packageUrl')}`}
                    href={p.url}
                    target="_blank"
                    onClick={stopPropagation}
                    rel="noreferrer"
                  >
                    <Icon name="github" />
                    {t('settings.licensesSettings.github')}
                  </a>
                )}
                <span className={cx('itemHandle')}>
                  {open === p.id ? <Icon name="angle-up" /> : <Icon name="angle-down" />}
                </span>
              </div>
            </button>
          </li>
          <div
            className={`collapse collapse-arrow ${
              open === p.id ? 'collapse-open' : 'collapse-close'
            }`}
          >
            <div className="collapse-content">
              <pre className={cx('packageText')} style={{ padding: '16px' }}>
                {p.text}
              </pre>
            </div>
          </div>
        </Fragment>
      ))}
    </ul>
  );
};

export default Licenses;
