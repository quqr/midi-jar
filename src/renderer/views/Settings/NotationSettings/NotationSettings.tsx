import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { InputNote } from 'renderer/components';

import { fields } from './constants';

const NotationSettings: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="form-control w-full">
        <label
          htmlFor="keySignature"
          className="label cursor-pointer flex-row-reverse justify-between"
        >
          <span className="label-text">{t('settings.notationSettings.keySignature')}</span>
          <InputNote
            id="keySignature"
            onChange={(value: string) => updateSetting('notation.key', value)}
            value={settings.notation.key}
            type="text"
            learn
          />
        </label>
      </div>

      <div className="form-control w-full">
        <label
          htmlFor="accidentalsInC"
          className="label cursor-pointer flex-row-reverse justify-between"
        >
          <span className="label-text">{t('settings.notationSettings.accidentalsInC')}</span>
          <select
            id="accidentalsInC"
            className="select select-bordered w-full"
            onChange={(e) => updateSetting('notation.accidentals', e.target.value)}
            value={settings.notation.accidentals}
            disabled={settings.notation.key !== 'C'}
          >
            {fields.accidentals.choices.map((c: { value: string; labelKey: string }) => (
              <option key={c.value} value={c.value}>
                {t(`settings.notationSettings.${c.labelKey}`)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-control w-full">
        <label
          htmlFor="staffClef"
          className="label cursor-pointer flex-row-reverse justify-between"
        >
          <span className="label-text">{t('settings.notationSettings.staffClef')}</span>
          <select
            id="staffClef"
            className="select select-bordered w-full"
            onChange={(e) => updateSetting('notation.staffClef', e.target.value)}
            value={settings.notation.staffClef}
          >
            {fields.staffClef.choices.map((c: { value: string; labelKey: string }) => (
              <option key={c.value} value={c.value}>
                {t(`settings.notationSettings.${c.labelKey}`)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-control w-full">
        <label htmlFor="staffTranspose" className="label">
          <span className="label-text font-medium">
            {t('settings.notationSettings.staffTranspose')}
          </span>
        </label>
        <label htmlFor="staffTranspose" className="label">
          <span className="label-text-alt">
            {t('settings.notationSettings.staffTransposeHint')}
          </span>
        </label>
        <input
          id="staffTranspose"
          type="range"
          className="range range-xs"
          value={settings.notation.staffTranspose}
          onChange={(e) => updateSetting('notation.staffTranspose', Number(e.target.value))}
          min={-24}
          max={24}
          step={1}
        />
        <div className="flex justify-between px-2 text-xs mt-2">
          <span>-24</span>
          <span>-12</span>
          <span>0</span>
          <span>12</span>
          <span>24</span>
        </div>
        <p className="text-sm mt-1">
          {`${settings.notation.staffTranspose.toFixed()} ${t('notation.semitone')}`}
        </p>
      </div>
    </div>
  );
};

export default NotationSettings;
