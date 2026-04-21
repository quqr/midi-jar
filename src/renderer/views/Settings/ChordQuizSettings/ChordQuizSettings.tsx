import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { Icon, ScrollContainer } from 'renderer/components';

import { chordsByComplexity, fields } from './constants';

import styles from './ChordQuizSettings.module.scss';

const cx = classnames.bind(styles);

const ChordQuizSettings: React.FC = () => {
  const { settings, updateSetting, resetSettings } = useSettings();
  const { t } = useTranslation();

  return (
    <>
      <ScrollContainer className="p-4">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="form-control w-full">
            <label htmlFor="chordQuizMode" className="label">
              <span className="label-text font-medium">{t('settings.chordQuizSettings.mode')}</span>
            </label>
            <label htmlFor="chordQuizMode" className="label">
              <span className="label-text-alt">{t('settings.chordQuizSettings.modeHint')}</span>
            </label>
            <select
              id="chordQuizMode"
              className="select select-bordered w-full"
              onChange={(e) => updateSetting('chordQuiz.mode', e.target.value)}
              value={settings.chordQuiz.mode}
            >
              {fields.mode.choices.map((c: { value: string; label: string }) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full">
            <label htmlFor="chordQuizDifficulty" className="label">
              <span className="label-text font-medium">
                {t('settings.chordQuizSettings.difficulty')}
              </span>
            </label>
            <label htmlFor="chordQuizDifficulty" className="label">
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.difficultyHint')}
              </span>
            </label>
            <select
              id="chordQuizDifficulty"
              className="select select-bordered w-full"
              onChange={(e) => updateSetting('chordQuiz.difficulty', Number(e.target.value))}
              value={`${settings.chordQuiz.difficulty}`}
            >
              {fields.difficulty.choices.map((c: { value: string; label: string }) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className={cx('chordList')}>
            {settings.chordQuiz.difficulty > 0 && (
              <span className={cx('previousLevel')}>
                {t('settings.chordQuizSettings.previousLevel')}
              </span>
            )}
            {chordsByComplexity[settings.chordQuiz.difficulty]?.map((chord: string) => (
              <span className={cx('chord')} key={chord}>
                {chord}
              </span>
            ))}
          </div>

          <div className="form-control w-full">
            <label htmlFor="chordQuizGameLength" className="label">
              <span className="label-text font-medium">
                {t('settings.chordQuizSettings.gameLength')}
              </span>
            </label>
            <label htmlFor="chordQuizGameLength" className="label">
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.gameLengthHint')}
              </span>
            </label>
            <input
              id="chordQuizGameLength"
              type="range"
              className="range"
              value={settings.chordQuiz.gameLength}
              onChange={(e) => updateSetting('chordQuiz.gameLength', Number(e.target.value))}
              min={4}
              max={32}
              step={4}
            />
            <div className="flex justify-between px-2 text-xs mt-2">
              <span>4</span>
              <span>8</span>
              <span>16</span>
              <span>24</span>
              <span>32</span>
            </div>
            <p className="text-sm mt-1">{`${settings.chordQuiz.gameLength}`}</p>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="chordQuizGamification"
              className="label cursor-pointer flex-row-reverse justify-between"
            >
              <span className="label-text">{t('settings.chordQuizSettings.gamification')}</span>
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.gamificationHint')}
              </span>
              <input
                id="chordQuizGamification"
                type="checkbox"
                className="toggle"
                onChange={(e) => updateSetting('chordQuiz.gamification', e.target.checked)}
                checked={settings.chordQuiz.gamification}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="chordQuizChordNotation"
              className="label cursor-pointer flex-row-reverse justify-between"
            >
              <span className="label-text">{t('settings.chordQuizSettings.chordNotation')}</span>
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.chordNotationHint')}
              </span>
              <select
                id="chordQuizChordNotation"
                className="select select-bordered w-full"
                value={settings.chordQuiz.chordNotation}
                onChange={(e) => updateSetting('chordQuiz.chordNotation', e.target.value)}
              >
                {fields.chordNotation.choices.map((c: { value: string; label: string }) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="chordQuizDisplayReaction"
              className="label cursor-pointer flex-row-reverse justify-between"
            >
              <span className="label-text">{t('settings.chordQuizSettings.displayReaction')}</span>
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.displayReactionHint')}
              </span>
              <input
                id="chordQuizDisplayReaction"
                type="checkbox"
                className="toggle"
                onChange={(e) => updateSetting('chordQuiz.displayReaction', e.target.checked)}
                checked={settings.chordQuiz.displayReaction}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="chordQuizDisplayChordName"
              className="label cursor-pointer flex-row-reverse justify-between"
            >
              <span className="label-text">{t('settings.chordQuizSettings.displayChordName')}</span>
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.displayChordNameHint')}
              </span>
              <input
                id="chordQuizDisplayChordName"
                type="checkbox"
                className="toggle"
                onChange={(e) => updateSetting('chordQuiz.displayName', e.target.checked)}
                checked={settings.chordQuiz.displayName}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="chordQuizDisplayIntervals"
              className="label cursor-pointer flex-row-reverse justify-between"
            >
              <span className="label-text">{t('settings.chordQuizSettings.displayIntervals')}</span>
              <span className="label-text-alt">
                {t('settings.chordQuizSettings.displayIntervalsHint')}
              </span>
              <input
                id="chordQuizDisplayIntervals"
                type="checkbox"
                className="toggle"
                onChange={(e) => updateSetting('chordQuiz.displayIntervals', e.target.checked)}
                checked={settings.chordQuiz.displayIntervals}
              />
            </label>
          </div>
        </div>
      </ScrollContainer>
      <div className="flex items-center gap-2 p-2 fixed bottom-0 left-0 right-0 z-10 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]">
        <button
          type="button"
          className="btn btn-neutral"
          onClick={() => resetSettings('chordQuiz')}
        >
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </button>
      </div>
    </>
  );
};

export default ChordQuizSettings;
