/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { useSettings } from 'renderer/contexts/Settings';
import { Icon } from 'renderer/components';

import { ChordDictionarySettings as TChordDictionarySettings } from 'main/types';
import { ChordSearch } from './ChordSearch';

import styles from './ChordDictionary.module.scss';
import ChordDictionarySettings from '../Settings/ChordDictionarySettings';

const cx = classnames.bind(styles);

type Props = {
  disableUpdate?: boolean;
};

const ChordDictionaryToolbar: React.FC<Props> = ({ disableUpdate }) => {
  const navigate = useNavigate();
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const toggleHideDisabled = () =>
    updateSetting('chordDictionary.hideDisabled', !settings.chordDictionary.hideDisabled);
  const toggleFilterInKey = () =>
    updateSetting('chordDictionary.filterInKey', !settings.chordDictionary.filterInKey);

  const handleToggleInteractive = (interactive: TChordDictionarySettings['interactive']) => () =>
    updateSetting('chordDictionary.interactive', interactive);

  const getGroupLabel = (groupBy: string) => {
    if (groupBy === 'none') return t('chordDictionary.groupNames.noGroup');
    if (groupBy === 'quality') return t('chordDictionary.groupNames.byQuality');
    return t('chordDictionary.groupNames.byIntervals');
  };

  const handleChordSelect = (chord: string | null) => {
    if (chord) {
      navigate(`./${encodeURIComponent(chord)}`);
    }
  };

  const handleSettingsClosed = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      <div
        className={cx('header', 'flex items-center gap-3 py-3 px-4 border-b border-neutral-300')}
      >
        {!disableUpdate && (
          <div className={cx('menu', 'dropdown dropdown-bottom')}>
            <button type="button" tabIndex={0} className="btn btn-neutral gap-2">
              {`${getGroupLabel(settings.chordDictionary.groupBy)}${
                settings.chordDictionary.filterInKey ? t('chordDictionary.inKey') : ''
              }`}
              <Icon name="angle-down" />
            </button>
            <ul
              tabIndex={0}
              role="menu"
              className="dropdown-content z-[1] menu p-3 shadow-lg bg-base-100 rounded-box w-64"
            >
              <li>
                <div className="menu-title px-2 py-1">{t('chordDictionary.group')}</div>
                <ul role="none">
                  <li>
                    <label className="label cursor-pointer gap-2">
                      <span>
                        <input
                          id="groupByNone"
                          type="radio"
                          name="group"
                          className="radio radio-sm"
                          checked={settings.chordDictionary.groupBy === 'none'}
                          onChange={() => updateSetting('chordDictionary.groupBy', 'none')}
                        />
                      </span>
                      <label htmlFor="groupByNone">{t('chordDictionary.groupNames.noGroup')}</label>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer gap-2">
                      <span>
                        <input
                          id="groupByQuality"
                          type="radio"
                          name="group"
                          className="radio radio-sm"
                          checked={settings.chordDictionary.groupBy === 'quality'}
                          onChange={() => updateSetting('chordDictionary.groupBy', 'quality')}
                        />
                      </span>
                      <label htmlFor="groupByQuality">
                        {t('chordDictionary.groupNames.byQuality')}
                      </label>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer gap-2">
                      <span>
                        <input
                          id="groupByIntervals"
                          type="radio"
                          name="group"
                          className="radio radio-sm"
                          checked={settings.chordDictionary.groupBy === 'intervals'}
                          onChange={() => updateSetting('chordDictionary.groupBy', 'intervals')}
                        />
                      </span>
                      <label htmlFor="groupByIntervals">
                        {t('chordDictionary.groupNames.byIntervals')}
                      </label>
                    </label>
                  </li>
                </ul>
              </li>
              <div className="divider my-1" />
              <li>
                <div className="menu-title px-2 py-1">{t('chordDictionary.filter')}</div>
                <ul role="none">
                  <li>
                    <label className="label cursor-pointer gap-2">
                      <span>
                        <input
                          id="hideDisabled"
                          type="checkbox"
                          className="checkbox checkbox-sm"
                          checked={settings.chordDictionary.hideDisabled}
                          onChange={toggleHideDisabled}
                        />
                      </span>
                      <label htmlFor="hideDisabled">
                        {t('chordDictionary.hideDisabledChords')}
                      </label>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer gap-2">
                      <span>
                        <input
                          id="filterInKey"
                          type="checkbox"
                          className="checkbox checkbox-sm"
                          checked={settings.chordDictionary.filterInKey}
                          onChange={toggleFilterInKey}
                        />
                      </span>
                      <label htmlFor="filterInKey">{t('chordDictionary.onlyChordsInKey')}</label>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        <div className="divider divider-horizontal" />
        <ChordSearch onSelect={handleChordSelect} />
        {!disableUpdate && (
          <div role="group" className="btn-group gap-1">
            <button
              type="button"
              className={`btn btn-sm ${
                settings.chordDictionary.interactive === 'detect' ? 'btn-active' : ''
              }`}
              onClick={handleToggleInteractive('detect')}
            >
              {t('chordDictionary.detect')}
            </button>
            <button
              type="button"
              className={`btn btn-sm ${
                settings.chordDictionary.interactive === 'play' ? 'btn-active' : ''
              }`}
              onClick={handleToggleInteractive('play')}
            >
              {t('chordDictionary.play')}
            </button>
          </div>
        )}
        <button
          type="button"
          className="btn btn-neutral btn-square btn-sm"
          onClick={() => setSettingsOpen(true)}
          aria-label={t('chordDictionary.openDictionarySettings')}
        >
          <Icon name="settings" />
        </button>
      </div>
      <dialog open={settingsOpen} className={cx('base', 'modal modal-bottom sm:modal-middle')}>
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleSettingsClosed}
            >
              ✕
            </button>
          </form>
          <ChordDictionarySettings />
        </div>
      </dialog>
    </>
  );
};

ChordDictionaryToolbar.defaultProps = {
  disableUpdate: false,
};

export default ChordDictionaryToolbar;
