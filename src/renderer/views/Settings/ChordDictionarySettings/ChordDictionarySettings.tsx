import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import {
  Container,
  FormControlLabel,
  FormField,
  ButtonGroup,
  ToggleButton,
  Radio,
  RadioGroup,
  Switch,
  FormFieldset,
  Button,
  Box,
  List,
  ListItem,
  Select,
} from '@la-jarre-a-son/ui';

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
    <Container size="md">
      <FormFieldset label={t('settings.chordDictionarySettings.browse')}>
        <FormField
          label={t('settings.chordDictionarySettings.interactive')}
          hint={t('settings.chordDictionarySettings.interactiveHint')}
        >
          <ButtonGroup justify="center">
            <ToggleButton
              onClick={() => updateSetting('chordDictionary.interactive', 'detect')}
              selected={settings.chordDictionary.interactive === 'detect'}
            >
              {t('chordDictionary.detect')}
            </ToggleButton>
            <ToggleButton
              onClick={() => updateSetting('chordDictionary.interactive', 'play')}
              selected={settings.chordDictionary.interactive === 'play'}
            >
              {t('chordDictionary.play')}
            </ToggleButton>
          </ButtonGroup>
        </FormField>

        <FormField label={t('settings.chordDictionarySettings.groupChords')}>
          <RadioGroup
            value={settings.chordDictionary.groupBy}
            name="groupBy"
            onChange={(value) => updateSetting('chordDictionary.groupBy', value)}
          >
            <div>
              <FormControlLabel
                label={t('settings.chordDictionarySettings.noGroup')}
                hint={t('settings.chordDictionarySettings.noGroupHint')}
              >
                <Radio value="none" />
              </FormControlLabel>
              <FormControlLabel
                label={t('settings.chordDictionarySettings.byQuality')}
                hint={t('settings.chordDictionarySettings.byQualityHint')}
              >
                <Radio value="quality" />
              </FormControlLabel>
              <FormControlLabel
                label={t('settings.chordDictionarySettings.byInterval')}
                hint={t('settings.chordDictionarySettings.byIntervalHint')}
              >
                <Radio value="intervals" />
              </FormControlLabel>
            </div>
          </RadioGroup>
        </FormField>

        <FormControlLabel label={t('settings.chordDictionarySettings.hideDisabledChords')} reverse>
          <Switch
            onChange={(value) => updateSetting('chordDictionary.hideDisabled', value)}
            checked={settings.chordDictionary.hideDisabled}
          />
        </FormControlLabel>

        <FormControlLabel
          label={t('settings.chordDictionarySettings.filterChordsInKey')}
          hint={t('settings.chordDictionarySettings.filterChordsInKeyHint')}
          reverse
        >
          <Switch
            onChange={(value) => updateSetting('chordDictionary.filterInKey', value)}
            checked={settings.chordDictionary.filterInKey}
          />
        </FormControlLabel>
      </FormFieldset>
      <FormFieldset label={t('settings.chordDictionarySettings.disabledChords')}>
        <Box elevation={1}>
          <List>
            {settings.chordDictionary.disabled.map((disabledChord) => (
              <ListItem
                key={disabledChord}
                className={cx('disabled')}
                right={
                  <ButtonGroup>
                    <NavButton
                      intent="neutral"
                      size="sm"
                      icon
                      aria-label={t('settings.chordDictionarySettings.seeInDictionary')}
                      to={`/chord-dictionary/${encodeURIComponent(`C${disabledChord}`)}`}
                    >
                      <Icon name="dictionary" />
                    </NavButton>
                    <Button
                      intent="neutral"
                      size="sm"
                      icon
                      aria-label={t('common.delete')}
                      onClick={() => deleteDisabled(disabledChord)}
                    >
                      <Icon name="trash" />
                    </Button>
                  </ButtonGroup>
                }
              >
                {disabledChord}
              </ListItem>
            ))}
            {!settings.chordDictionary.disabled.length && (
              <ListItem disabled>{t('settings.chordDictionarySettings.noDisabledChords')}</ListItem>
            )}
          </List>
        </Box>
      </FormFieldset>
      <FormFieldset label={t('settings.chordDictionarySettings.preferredNotation')}>
        <FormControlLabel
          label={t('settings.chordDictionarySettings.defaultNotation')}
          hint={t('settings.chordDictionarySettings.defaultNotationHint')}
          reverse
        >
          <Select
            value={settings.chordDictionary.defaultNotation}
            onChange={(value) => updateSetting('chordDictionary.defaultNotation', value)}
            options={fields.defaultNotation.choices}
          />
        </FormControlLabel>
        <Box elevation={1}>
          <List>
            {settings.chordDictionary.aliases.map(([chordType, alias]) => (
              <ListItem
                className={cx('alias')}
                key={chordType}
                right={
                  <ButtonGroup>
                    <NavButton
                      intent="neutral"
                      size="sm"
                      icon
                      aria-label={t('settings.chordDictionarySettings.seeInDictionary')}
                      to={`/chord-dictionary/${encodeURIComponent(`C${chordType}`)}`}
                    >
                      <Icon name="dictionary" />
                    </NavButton>
                    <Button
                      intent="neutral"
                      size="sm"
                      icon
                      aria-label={t('common.delete')}
                      onClick={() => deleteAlias(chordType)}
                    >
                      <Icon name="trash" />
                    </Button>
                  </ButtonGroup>
                }
              >
                <div className={cx('alias-left')}>
                  <span>{chordType}</span>
                </div>
                <Icon className={cx('alias-icon')} name="angle-right" />
                <div className={cx('alias-right')}>
                  <span>{alias}</span>
                </div>
              </ListItem>
            ))}
            {!Object.keys(settings.chordDictionary.aliases).length && (
              <ListItem disabled>
                {t('settings.chordDictionarySettings.noPreferredAliases')}
              </ListItem>
            )}
          </List>
        </Box>
      </FormFieldset>
    </Container>
  );
};

export default ChordDictionarySettings;
