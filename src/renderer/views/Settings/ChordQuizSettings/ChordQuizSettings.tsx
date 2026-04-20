import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Switch,
  FormField,
  FormControlLabel,
  Slider,
  Select,
  Toolbar,
} from '@la-jarre-a-son/ui';

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
      <ScrollContainer pad="md">
        <Container size="md">
          <FormField
            label={t('settings.chordQuizSettings.mode')}
            hint={t('settings.chordQuizSettings.modeHint')}
          >
            <Select
              options={fields.mode.choices}
              onChange={(value) => updateSetting('chordQuiz.mode', value)}
              value={settings.chordQuiz.mode}
            />
          </FormField>

          <FormField
            label={t('settings.chordQuizSettings.difficulty')}
            hint={t('settings.chordQuizSettings.difficultyHint')}
          >
            <Select
              options={fields.difficulty.choices}
              onChange={(value: string) => updateSetting('chordQuiz.difficulty', Number(value))}
              value={`${settings.chordQuiz.difficulty}`}
            />
          </FormField>

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

          <FormField
            label={t('settings.chordQuizSettings.gameLength')}
            hint={t('settings.chordQuizSettings.gameLengthHint')}
          >
            <Slider
              value={settings.chordQuiz.gameLength}
              onChange={(value) =>
                updateSetting('chordQuiz.gameLength', Array.isArray(value) ? value[0] : value)
              }
              min={4}
              max={32}
              step={4}
              marks={[4, 8, 16, 24, 32]}
              valueText={`${settings.chordQuiz.gameLength}`}
            />
          </FormField>

          <FormControlLabel
            label={t('settings.chordQuizSettings.gamification')}
            hint={t('settings.chordQuizSettings.gamificationHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('chordQuiz.gamification', value)}
              checked={settings.chordQuiz.gamification}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.chordQuizSettings.chordNotation')}
            hint={t('settings.chordQuizSettings.chordNotationHint')}
            reverse
          >
            <Select
              value={settings.chordQuiz.chordNotation}
              onChange={(value) => updateSetting('chordQuiz.chordNotation', value)}
              options={fields.chordNotation.choices}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.chordQuizSettings.displayReaction')}
            hint={t('settings.chordQuizSettings.displayReactionHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('chordQuiz.displayReaction', value)}
              checked={settings.chordQuiz.displayReaction}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.chordQuizSettings.displayChordName')}
            hint={t('settings.chordQuizSettings.displayChordNameHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('chordQuiz.displayName', value)}
              checked={settings.chordQuiz.displayName}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.chordQuizSettings.displayIntervals')}
            hint={t('settings.chordQuizSettings.displayIntervalsHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('chordQuiz.displayIntervals', value)}
              checked={settings.chordQuiz.displayIntervals}
            />
          </FormControlLabel>
        </Container>
      </ScrollContainer>
      <Toolbar elevation={2} placement="bottom">
        <Button onClick={() => resetSettings('chordQuiz')} intent="neutral">
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </Button>
      </Toolbar>
    </>
  );
};

export default ChordQuizSettings;
