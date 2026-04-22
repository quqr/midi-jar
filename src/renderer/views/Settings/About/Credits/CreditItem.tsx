import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'renderer/components';

import { CreditItemProps } from './types';

const CreditItem: React.FC<CreditItemProps> = ({ name, description, links }) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td className="font-semibold">{name}</td>
      <td>{description}</td>
      <td>
        <div className="flex justify-center gap-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-xs gap-1"
            >
              <Icon name="github" />
              {t('settings.aboutSettings.credits.github')}
            </a>
          )}
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-xs"
            >
              {t('settings.aboutSettings.credits.website')}
            </a>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CreditItem;
