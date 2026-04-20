import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useModuleSettings } from 'renderer/contexts/Settings';

import {
  Container,
  Button,
  Select,
  Switch,
  FormFieldset,
  FormControlLabel,
  Toolbar,
  StackSeparator,
  Slider,
  FormField,
} from '@la-jarre-a-son/ui';

import { Icon, InputColor, InputNote, ScrollContainer } from 'renderer/components';

import { fields } from './utils';

type Props = {
  parentPath: string;
};

const ChordDisplayModuleSettings: React.FC<Props> = ({ parentPath }) => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const { moduleSettings, updateModuleSetting, resetModuleSettings, deleteModule } =
    useModuleSettings('chordDisplay', moduleId ?? '');
  const { t } = useTranslation();

  const handleDeleteModule = () => {
    deleteModule();
    navigate(parentPath);
  };

  return (
    <>
      <ScrollContainer pad="md">
        <Container size="md">
          <FormFieldset label={t('settings.chordDisplaySettings.chords')}>
            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayChord')}
              hint={t('settings.chordDisplaySettings.displayChordHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayChord', value)}
                checked={moduleSettings.displayChord}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayAltChords')}
              hint={t('settings.chordDisplaySettings.displayAltChordsHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayAltChords', value)}
                checked={moduleSettings.displayAltChords}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayChordName')}
              hint={t('settings.chordDisplaySettings.displayChordNameHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayName', value)}
                checked={moduleSettings.displayName}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.chordNotation')}
              hint={t('settings.chordDisplaySettings.chordNotationHint')}
              reverse
            >
              <Select
                value={moduleSettings.chordNotation}
                onChange={(value) => updateModuleSetting('chordNotation', value)}
                options={fields.chordNotation.choices}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.highlightAlterations')}
              hint={t('settings.chordDisplaySettings.highlightAlterationsHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('highlightAlterations', value)}
                checked={moduleSettings.highlightAlterations}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.allowOmissions')}
              hint={t('settings.chordDisplaySettings.allowOmissionsHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('allowOmissions', value)}
                checked={moduleSettings.allowOmissions}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.useSustainPedal')}
              hint={t('settings.chordDisplaySettings.useSustainPedalHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('useSustain', value)}
                checked={moduleSettings.useSustain}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.detectOnRelease')}
              hint={t('settings.chordDisplaySettings.detectOnReleaseHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('detectOnRelease', value)}
                checked={moduleSettings.detectOnRelease}
              />
            </FormControlLabel>
          </FormFieldset>

          <FormFieldset label={t('settings.chordDisplaySettings.additionalInfo')}>
            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayNotation')}
              hint={t('settings.chordDisplaySettings.displayNotationHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayNotation', value)}
                checked={moduleSettings.displayNotation}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayIntervals')}
              hint={t('settings.chordDisplaySettings.displayIntervalsHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayIntervals', value)}
                checked={moduleSettings.displayIntervals}
              />
            </FormControlLabel>
          </FormFieldset>

          <FormFieldset label={t('settings.chordDisplaySettings.keyboard')}>
            <FormControlLabel
              label={t('settings.chordDisplaySettings.displayKeyboard')}
              hint={t('settings.chordDisplaySettings.displayKeyboardHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('displayKeyboard', value)}
                checked={moduleSettings.displayKeyboard}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.noteStart')}
              hint={t('settings.chordDisplaySettings.noteStartHint')}
              reverse
            >
              <InputNote
                onChange={(value) => updateModuleSetting('keyboard.from', value)}
                value={moduleSettings.keyboard.from}
                withOctave
                learn
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.noteEnd')}
              hint={t('settings.chordDisplaySettings.noteEndHint')}
              reverse
            >
              <InputNote
                onChange={(value) => updateModuleSetting('keyboard.to', value)}
                value={moduleSettings.keyboard.to}
                withOctave
                learn
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.wrapKeyboard')}
              hint={t('settings.chordDisplaySettings.wrapKeyboardHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('keyboard.wrap', value)}
                checked={moduleSettings.keyboard.wrap}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.displaySustainedNotes')}
              hint={t('settings.chordDisplaySettings.displaySustainedNotesHint')}
              reverse
            >
              <Switch
                onChange={(value) => updateModuleSetting('keyboard.displaySustained', value)}
                checked={moduleSettings.keyboard.displaySustained}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.keyNames')}
              hint={t('settings.chordDisplaySettings.keyNamesHint')}
              reverse
            >
              <Select
                value={moduleSettings.keyboard.keyName}
                onChange={(value) => updateModuleSetting('keyboard.keyName', value)}
                options={fields.keyboard.keyName.choices}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.playedKeyInfo')}
              hint={t('settings.chordDisplaySettings.playedKeyInfoHint')}
              reverse
            >
              <Select
                value={moduleSettings.keyboard.keyInfo}
                onChange={(value) => updateModuleSetting('keyboard.keyInfo', value)}
                options={fields.keyboard.keyInfo.choices}
              />
            </FormControlLabel>

            <FormControlLabel
              label={t('settings.chordDisplaySettings.playedKeyLabel')}
              hint={t('settings.chordDisplaySettings.playedKeyLabelHint')}
              reverse
            >
              <Select
                value={moduleSettings.keyboard.label}
                onChange={(value) => updateModuleSetting('keyboard.label', value)}
                options={fields.keyboard.label.choices}
              />
            </FormControlLabel>

            <FormField
              label={t('settings.chordDisplaySettings.fadeOutDuration')}
              hint={t('settings.chordDisplaySettings.fadeOutDurationHint')}
            >
              <Slider
                value={moduleSettings.keyboard.fadeOutDuration}
                onChange={(value) =>
                  updateModuleSetting(
                    'keyboard.fadeOutDuration',
                    Array.isArray(value) ? value[0] : value
                  )
                }
                min={0}
                max={1}
                step={0.1}
                valueText={`${moduleSettings.keyboard.fadeOutDuration.toFixed(1)}s`}
              />
            </FormField>
          </FormFieldset>

          <FormFieldset label={t('settings.chordDisplaySettings.keyboardSkin')}>
            <FormControlLabel
              label={t('settings.chordDisplaySettings.skin')}
              hint={t('settings.chordDisplaySettings.skinHint')}
              reverse
            >
              <Select
                value={moduleSettings.keyboard.skin}
                onChange={(value) => updateModuleSetting('keyboard.skin', value)}
                options={fields.keyboard.skin.choices}
              />
            </FormControlLabel>

            <FormField
              label={t('settings.chordDisplaySettings.textOpacity')}
              hint={t('settings.chordDisplaySettings.textOpacityHint')}
            >
              <Slider
                value={moduleSettings.keyboard.textOpacity}
                onChange={(value) =>
                  updateModuleSetting(
                    'keyboard.textOpacity',
                    Array.isArray(value) ? value[0] : value
                  )
                }
                min={0}
                max={1}
                step={0.1}
                valueText={`${moduleSettings.keyboard.textOpacity}`}
              />
            </FormField>

            <FormField
              label={t('settings.chordDisplaySettings.keyHeight')}
              hint={t('settings.chordDisplaySettings.keyHeightHint')}
            >
              <Slider
                value={moduleSettings.keyboard.sizes.height}
                onChange={(value) =>
                  updateModuleSetting(
                    'keyboard.sizes.height',
                    Array.isArray(value) ? value[0] : value
                  )
                }
                min={1}
                max={16}
                step={0.1}
                valueText={`${moduleSettings.keyboard.sizes.height}`}
              />
            </FormField>

            {moduleSettings.keyboard.skin === 'classic' && (
              <FormField
                label={t('settings.chordDisplaySettings.blackKeyRatio')}
                hint={t('settings.chordDisplaySettings.blackKeyRatioHint')}
              >
                <Slider
                  value={moduleSettings.keyboard.sizes.ratio}
                  onChange={(value) =>
                    updateModuleSetting(
                      'keyboard.sizes.ratio',
                      Array.isArray(value) ? value[0] : value
                    )
                  }
                  min={0.1}
                  max={0.9}
                  step={0.025}
                  valueText={`${(moduleSettings.keyboard.sizes.ratio * 100).toFixed(1)}%`}
                />
              </FormField>
            )}
            {moduleSettings.keyboard.skin === 'classic' && (
              <FormField label={t('settings.chordDisplaySettings.keyBorderRadius')}>
                <Slider
                  value={moduleSettings.keyboard.sizes.radius}
                  onChange={(value) =>
                    updateModuleSetting(
                      'keyboard.sizes.radius',
                      Array.isArray(value) ? value[0] : value
                    )
                  }
                  min={0}
                  max={1}
                  step={0.05}
                  valueText={`${Math.round(moduleSettings.keyboard.sizes.radius * 100)}%`}
                />
              </FormField>
            )}
            {moduleSettings.keyboard.skin === 'classic' && (
              <FormControlLabel
                label={t('settings.chordDisplaySettings.keyBevel')}
                hint={t('settings.chordDisplaySettings.keyBevelHint')}
                reverse
              >
                <Switch
                  onChange={(value) => updateModuleSetting('keyboard.sizes.bevel', value)}
                  checked={moduleSettings.keyboard.sizes.bevel}
                />
              </FormControlLabel>
            )}
          </FormFieldset>

          <FormFieldset label={t('settings.chordDisplaySettings.keyboardColors')}>
            <FormControlLabel label={t('settings.chordDisplaySettings.blackKeys')} reverse>
              <InputColor
                onChange={(value) => updateModuleSetting('keyboard.colors.black', value)}
                value={moduleSettings.keyboard.colors.black}
              />
            </FormControlLabel>

            <FormControlLabel label={t('settings.chordDisplaySettings.whiteKeys')} reverse>
              <InputColor
                onChange={(value) => updateModuleSetting('keyboard.colors.white', value)}
                value={moduleSettings.keyboard.colors.white}
              />
            </FormControlLabel>

            <FormControlLabel label={t('settings.chordDisplaySettings.playedKeys')} reverse>
              <InputColor
                onChange={(value) => updateModuleSetting('keyboard.colors.played', value)}
                value={moduleSettings.keyboard.colors.played}
              />
            </FormControlLabel>

            <FormControlLabel label={t('settings.chordDisplaySettings.wrappedKeys')} reverse>
              <InputColor
                onChange={(value) => updateModuleSetting('keyboard.colors.wrapped', value)}
                value={moduleSettings.keyboard.colors.wrapped}
              />
            </FormControlLabel>

            <FormControlLabel label={t('settings.chordDisplaySettings.sustainedKeys')} reverse>
              <InputColor
                onChange={(value) => updateModuleSetting('keyboard.colors.sustained', value)}
                value={moduleSettings.keyboard.colors.sustained}
              />
            </FormControlLabel>
          </FormFieldset>
        </Container>
      </ScrollContainer>
      <Toolbar elevation={2} placement="bottom">
        <Button onClick={() => resetModuleSettings()} intent="neutral">
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </Button>
        <StackSeparator />
        <Button onClick={handleDeleteModule} intent="neutral">
          <Icon name="trash" />
          {t('common.delete')}
        </Button>
      </Toolbar>
    </>
  );
};

export default ChordDisplayModuleSettings;
