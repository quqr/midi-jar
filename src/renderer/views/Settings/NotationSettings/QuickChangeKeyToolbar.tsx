import React from 'react';
import { Box, InputContainerLabel, InputGroup, Select } from '@la-jarre-a-son/ui';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { fields } from './constants';

export const QuickChangeKeyToolbar: React.FC = () => {
  const { settings, updateSetting } = useSettings();
  const { t } = useTranslation();

  return (
    <Box elevation={2}>
      <InputGroup as="label" block>
        <InputContainerLabel>{t('settings.notationSettings.key')}</InputContainerLabel>
        <Select
          onChange={(value: string) => updateSetting('notation.key', value)}
          value={settings.notation.key}
          options={fields.keySignature.choices.map((c: { value: string; labelKey: string }) => ({
            value: c.value,
            label: t(`settings.notationSettings.keySignatures.${c.labelKey}`),
          }))}
        />
      </InputGroup>
    </Box>
  );
};

export default QuickChangeKeyToolbar;
