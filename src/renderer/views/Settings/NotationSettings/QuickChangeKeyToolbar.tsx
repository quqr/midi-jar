import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from 'renderer/contexts/Settings';
import { fields } from './constants';

export const QuickChangeKeyToolbar: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 py-2 px-3 bg-base-100 rounded-md shadow-md">
      <label htmlFor="keySignature" className="form-control w-full">
        <div className="label py-1 px-0">
          <span className="label-text text-sm font-medium">
            {t('settings.notationSettings.key')}
          </span>
        </div>
        <select
          id="keySignature"
          className="select select-bordered select-sm w-full transition-all duration-200 hover:shadow-sm"
          onChange={(e) => updateSetting('notation.key', e.target.value)}
          value={settings.notation.key}
        >
          {fields.keySignature.choices.map((c: { value: string; labelKey: string }) => (
            <option key={c.value} value={c.value}>
              {t(`settings.notationSettings.keySignatures.${c.labelKey}`)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default QuickChangeKeyToolbar;
