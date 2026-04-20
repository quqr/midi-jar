import React from 'react';
import {
  Button,
  Container,
  Switch,
  FormField,
  FormControlLabel,
  Select,
  Toolbar,
} from '@la-jarre-a-son/ui';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';

import { Icon, ScrollContainer } from 'renderer/components';

import { fields } from './constants';

const CircleOfFifthsSettings: React.FC = () => {
  const { settings, updateSetting, resetSettings } = useSettings();
  const { t } = useTranslation();

  return (
    <>
      <ScrollContainer pad="md">
        <Container size="md">
          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayMajor')}
            hint={t('settings.circleOfFifthsSettings.displayMajorHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayMajor', value)}
              checked={settings.circleOfFifths.displayMajor}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayMinor')}
            hint={t('settings.circleOfFifthsSettings.displayMinorHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayMinor', value)}
              checked={settings.circleOfFifths.displayMinor}
            />
          </FormControlLabel>

          <FormField
            label={t('settings.circleOfFifthsSettings.mainScale')}
            hint={t('settings.circleOfFifthsSettings.mainScaleHint')}
          >
            <Select
              options={fields.scale.choices.map((c: { value: string; labelKey: string }) => ({
                value: c.value,
                label: t(c.labelKey),
              }))}
              onChange={(value) => updateSetting('circleOfFifths.scale', value)}
              value={settings.circleOfFifths.scale}
              disabled={
                !(settings.circleOfFifths.displayMajor && settings.circleOfFifths.displayMinor)
              }
            />
          </FormField>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayDiminished')}
            hint={t('settings.circleOfFifthsSettings.displayDiminishedHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayDiminished', value)}
              checked={settings.circleOfFifths.displayDiminished}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayDominantChords')}
            hint={t('settings.circleOfFifthsSettings.displayDominantChordsHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayDominants', value)}
              checked={settings.circleOfFifths.displayDominants}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displaySuspendedChords')}
            hint={t('settings.circleOfFifthsSettings.displaySuspendedChordsHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displaySuspended', value)}
              checked={settings.circleOfFifths.displaySuspended}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayAlterations')}
            hint={t('settings.circleOfFifthsSettings.displayAlterationsHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayAlterations', value)}
              checked={settings.circleOfFifths.displayAlterations}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayModes')}
            hint={t('settings.circleOfFifthsSettings.displayModesHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayModes', value)}
              checked={settings.circleOfFifths.displayModes}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayDegrees')}
            hint={t('settings.circleOfFifthsSettings.displayDegreesHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayDegrees', value)}
              checked={settings.circleOfFifths.displayDegrees}
            />
          </FormControlLabel>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.displayDegreeLabels')}
            hint={t('settings.circleOfFifthsSettings.displayDegreeLabelsHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.displayDegreeLabels', value)}
              checked={settings.circleOfFifths.displayDegreeLabels}
            />
          </FormControlLabel>

          <FormField
            label={t('settings.circleOfFifthsSettings.highlightSectors')}
            hint={t('settings.circleOfFifthsSettings.highlightSectorsHint')}
          >
            <Select
              options={fields.highlightSector.choices.map(
                (c: { value: string; labelKey: string }) => ({
                  value: c.value,
                  label: t(c.labelKey),
                })
              )}
              onChange={(value) => updateSetting('circleOfFifths.highlightSector', value)}
              value={settings.circleOfFifths.highlightSector}
            />
          </FormField>

          <FormControlLabel
            label={t('settings.circleOfFifthsSettings.highlightSectorsInKey')}
            hint={t('settings.circleOfFifthsSettings.highlightSectorsInKeyHint')}
            reverse
          >
            <Switch
              onChange={(value) => updateSetting('circleOfFifths.highlightInScale', value)}
              checked={settings.circleOfFifths.highlightInScale}
            />
          </FormControlLabel>
        </Container>
      </ScrollContainer>
      <Toolbar elevation={2} placement="bottom">
        <Button onClick={() => resetSettings('circleOfFifths')} intent="neutral">
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </Button>
      </Toolbar>
    </>
  );
};

export default CircleOfFifthsSettings;
