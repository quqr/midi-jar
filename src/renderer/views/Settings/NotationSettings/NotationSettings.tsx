import React from 'react';
import { Container, Select, Slider, FormControlLabel, FormField } from '@la-jarre-a-son/ui';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { InputNote } from 'renderer/components';

import { fields } from './constants';

const NotationSettings: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  return (
    <Container size="md">
      <FormControlLabel label={t('settings.notationSettings.keySignature')} reverse>
        <InputNote
          onChange={(value: string) => updateSetting('notation.key', value)}
          value={settings.notation.key}
          type="text"
          learn
        />
      </FormControlLabel>

      <FormControlLabel label={t('settings.notationSettings.accidentalsInC')} reverse>
        <Select
          options={fields.accidentals.choices.map((c: { value: string; labelKey: string }) => ({
            value: c.value,
            label: t(`settings.notationSettings.${c.labelKey}`),
          }))}
          onChange={(value) => updateSetting('notation.accidentals', value)}
          value={settings.notation.accidentals}
          disabled={settings.notation.key !== 'C'}
        />
      </FormControlLabel>

      <FormControlLabel label={t('settings.notationSettings.staffClef')} reverse>
        <Select
          options={fields.staffClef.choices.map((c: { value: string; labelKey: string }) => ({
            value: c.value,
            label: t(`settings.notationSettings.${c.labelKey}`),
          }))}
          onChange={(value) => updateSetting('notation.staffClef', value)}
          value={settings.notation.staffClef}
        />
      </FormControlLabel>

      <FormField
        label={t('settings.notationSettings.staffTranspose')}
        hint={t('settings.notationSettings.staffTransposeHint')}
      >
        <Slider
          value={settings.notation.staffTranspose}
          onChange={(value: number | number[]) => updateSetting('notation.staffTranspose', value)}
          min={-24}
          max={24}
          step={1}
          marks={[-24, -12, 0, 12, 24]}
          valueText={`${settings.notation.staffTranspose.toFixed()} ${t('notation.semitone')}`}
        />
      </FormField>
    </Container>
  );
};

export default NotationSettings;
