import React from 'react';
import { useTranslation } from 'react-i18next';

import { CreditsProps } from './types';
import CreditItem from './CreditItem';

const Credits: React.FC<CreditsProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="card bg-base-200 shadow-xl w-full my-4">
      <div className="card-body">
        <h2 className="card-title">{t('settings.aboutSettings.credits.title')}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>{t('settings.aboutSettings.credits.name')}</th>
                <th>{t('settings.aboutSettings.credits.description')}</th>
                <th className="text-center">{t('settings.aboutSettings.credits.links')}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((credit) => (
                <CreditItem key={credit.name} {...credit} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Credits;
