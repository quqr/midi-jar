import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { Icon, NavButton } from 'renderer/components';
import { fields } from './constants';

import styles from './ChordDictionarySettings.module.scss';

const cx = classnames.bind(styles);

const ChordDictionarySettings: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  const deleteDisabled = (value: string) => {
    const disabledChords = settings.chordDictionary.disabled.filter((c) => c !== value);

    return updateSetting('chordDictionary.disabled', disabledChords);
  };

  const deleteAlias = (value: string) => {
    const aliases = settings.chordDictionary.aliases.filter(([chordType]) => chordType !== value);

    return updateSetting('chordDictionary.aliases', aliases);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-6">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{t('settings.chordDictionarySettings.browse')}</legend>

        <div className="form-control w-full">
          <label htmlFor="interactiveMode" className="label">
            <span className="label-text font-medium">
              {t('settings.chordDictionarySettings.interactive')}
            </span>
          </label>
          <label htmlFor="interactiveMode" className="label">
            <span className="label-text-alt">
              {t('settings.chordDictionarySettings.interactiveHint')}
            </span>
          </label>
          <div id="interactiveMode" className="join flex justify-center w-full">
            <button
              type="button"
              className={`join-item btn ${
                settings.chordDictionary.interactive === 'detect' ? 'btn-active' : ''
              }`}
              onClick={() => updateSetting('chordDictionary.interactive', 'detect')}
            >
              {t('chordDictionary.detect')}
            </button>
            <button
              type="button"
              className={`join-item btn ${
                settings.chordDictionary.interactive === 'play' ? 'btn-active' : ''
              }`}
              onClick={() => updateSetting('chordDictionary.interactive', 'play')}
            >
              {t('chordDictionary.play')}
            </button>
          </div>
        </div>

        <div className="form-control w-full">
          <label htmlFor="groupByContainer" className="label">
            <span className="label-text font-medium">
              {t('settings.chordDictionarySettings.groupChords')}
            </span>
          </label>
          <div id="groupByContainer" className="space-y-2">
            <div className="label cursor-pointer justify-start gap-3">
              <input
                id="groupByNone"
                type="radio"
                name="groupBy"
                className="radio radio-bordered"
                value="none"
                checked={settings.chordDictionary.groupBy === 'none'}
                onChange={(e) => updateSetting('chordDictionary.groupBy', e.target.value)}
              />
              <label htmlFor="groupByNone" className="label-text">
                {t('settings.chordDictionarySettings.noGroup')}
              </label>
              <label htmlFor="groupByNone" className="label-text-alt">
                {t('settings.chordDictionarySettings.noGroupHint')}
              </label>
            </div>
            <div className="label cursor-pointer justify-start gap-3">
              <input
                id="groupByQuality"
                type="radio"
                name="groupBy"
                className="radio radio-bordered"
                value="quality"
                checked={settings.chordDictionary.groupBy === 'quality'}
                onChange={(e) => updateSetting('chordDictionary.groupBy', e.target.value)}
              />
              <label htmlFor="groupByQuality" className="label-text">
                {t('settings.chordDictionarySettings.byQuality')}
              </label>
              <label htmlFor="groupByQuality" className="label-text-alt">
                {t('settings.chordDictionarySettings.byQualityHint')}
              </label>
            </div>
            <div className="label cursor-pointer justify-start gap-3">
              <input
                id="groupByIntervals"
                type="radio"
                name="groupBy"
                className="radio radio-bordered"
                value="intervals"
                checked={settings.chordDictionary.groupBy === 'intervals'}
                onChange={(e) => updateSetting('chordDictionary.groupBy', e.target.value)}
              />
              <label htmlFor="groupByIntervals" className="label-text">
                {t('settings.chordDictionarySettings.byInterval')}
              </label>
              <label htmlFor="groupByIntervals" className="label-text-alt">
                {t('settings.chordDictionarySettings.byIntervalHint')}
              </label>
            </div>
          </div>
        </div>

        <div className="form-control w-full">
          <label
            htmlFor="hideDisabledChords"
            className="label cursor-pointer flex-row-reverse justify-between"
          >
            <span className="label-text">
              {t('settings.chordDictionarySettings.hideDisabledChords')}
            </span>
            <input
              id="hideDisabledChords"
              type="checkbox"
              className="toggle"
              onChange={(e) => updateSetting('chordDictionary.hideDisabled', e.target.checked)}
              checked={settings.chordDictionary.hideDisabled}
            />
          </label>
        </div>

        <div className="form-control w-full">
          <label
            htmlFor="filterChordsInKey"
            className="label cursor-pointer flex-row-reverse justify-between"
          >
            <span className="label-text">
              {t('settings.chordDictionarySettings.filterChordsInKey')}
            </span>
            <span className="label-text-alt">
              {t('settings.chordDictionarySettings.filterChordsInKeyHint')}
            </span>
            <input
              id="filterChordsInKey"
              type="checkbox"
              className="toggle"
              onChange={(e) => updateSetting('chordDictionary.filterInKey', e.target.checked)}
              checked={settings.chordDictionary.filterInKey}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          {t('settings.chordDictionarySettings.disabledChords')}
        </legend>
        <ul className="list bg-base-100 shadow-md divide-y divide-base-300">
          {settings.chordDictionary.disabled.map((disabledChord) => (
            <li
              key={disabledChord}
              className={`flex items-center justify-between p-3 ${cx('disabled')}`}
            >
              <span>{disabledChord}</span>
              <div className="join">
                <NavButton
                  className="join-item btn btn-sm btn-neutral"
                  aria-label={t('settings.chordDictionarySettings.seeInDictionary')}
                  to={`/chord-dictionary/${encodeURIComponent(`C${disabledChord}`)}`}
                >
                  <Icon name="dictionary" />
                </NavButton>
                <button
                  type="button"
                  className="join-item btn btn-sm btn-neutral"
                  aria-label={t('common.delete')}
                  onClick={() => deleteDisabled(disabledChord)}
                >
                  <Icon name="trash" />
                </button>
              </div>
            </li>
          ))}
          {!settings.chordDictionary.disabled.length && (
            <li className="p-3 opacity-50">
              {t('settings.chordDictionarySettings.noDisabledChords')}
            </li>
          )}
        </ul>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          {t('settings.chordDictionarySettings.preferredNotation')}
        </legend>
        <div className="form-control w-full">
          <label
            htmlFor="defaultNotation"
            className="label cursor-pointer flex-row-reverse justify-between"
          >
            <span className="label-text">
              {t('settings.chordDictionarySettings.defaultNotation')}
            </span>
            <span className="label-text-alt">
              {t('settings.chordDictionarySettings.defaultNotationHint')}
            </span>
            <select
              id="defaultNotation"
              className="select select-bordered w-full"
              value={settings.chordDictionary.defaultNotation}
              onChange={(e) => updateSetting('chordDictionary.defaultNotation', e.target.value)}
            >
              {fields.defaultNotation.choices.map((c: { value: string; label: string }) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <ul className="list bg-base-100 shadow-md divide-y divide-base-300">
          {settings.chordDictionary.aliases.map(([chordType, alias]) => (
            <li key={chordType} className={`flex items-center justify-between p-3 ${cx('alias')}`}>
              <div className="flex items-center gap-2">
                <div className={cx('alias-left')}>
                  <span>{chordType}</span>
                </div>
                <Icon className={cx('alias-icon')} name="angle-right" />
                <div className={cx('alias-right')}>
                  <span>{alias}</span>
                </div>
              </div>
              <div className="join">
                <NavButton
                  className="join-item btn btn-sm btn-neutral"
                  aria-label={t('settings.chordDictionarySettings.seeInDictionary')}
                  to={`/chord-dictionary/${encodeURIComponent(`C${chordType}`)}`}
                >
                  <Icon name="dictionary" />
                </NavButton>
                <button
                  type="button"
                  className="join-item btn btn-sm btn-neutral"
                  aria-label={t('common.delete')}
                  onClick={() => deleteAlias(chordType)}
                >
                  <Icon name="trash" />
                </button>
              </div>
            </li>
          ))}
          {!Object.keys(settings.chordDictionary.aliases).length && (
            <li className="p-3 opacity-50">
              {t('settings.chordDictionarySettings.noPreferredAliases')}
            </li>
          )}
        </ul>
      </fieldset>
    </div>
  );
};

export default ChordDictionarySettings;
