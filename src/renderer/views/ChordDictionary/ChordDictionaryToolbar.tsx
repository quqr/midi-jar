import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  DropdownTriggerInternal,
  Menu,
  MenuGroup,
  MenuItemCheckbox,
  MenuItemRadio,
  Stack,
  StackSeparator,
  ToggleButton,
  Toolbar,
} from '@la-jarre-a-son/ui';

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

  const bindSortAndFilter = (groupBy: TChordDictionarySettings['groupBy']) => ({
    onClick: () => updateSetting('chordDictionary.groupBy', groupBy),
    checked: settings.chordDictionary.groupBy === groupBy,
  });

  const getGroupLabel = (groupBy: string) => {
    if (groupBy === 'none') return t('chordDictionary.groupNames.noGroup');
    if (groupBy === 'quality') return t('chordDictionary.groupNames.byQuality');
    return t('chordDictionary.groupNames.byIntervals');
  };

  const menuTrigger: (internals: DropdownTriggerInternal) => React.ReactNode = ({
    open,
    triggerRef,
  }) => (
    <Button
      ref={triggerRef as React.Ref<HTMLButtonElement>}
      className={cx('menuTrigger')}
      right={open ? <Icon name="angle-up" /> : <Icon name="angle-down" />}
      intent="neutral"
    >
      {`${getGroupLabel(settings.chordDictionary.groupBy)}${
        settings.chordDictionary.filterInKey ? t('chordDictionary.inKey') : ''
      }`}
    </Button>
  );

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
      <Toolbar as={Stack} className={cx('header')} elevation={2}>
        {!disableUpdate && (
          <Menu className={cx('menu')} trigger={menuTrigger}>
            <MenuGroup header={t('chordDictionary.group')}>
              <MenuItemRadio {...bindSortAndFilter('none')}>
                {t('chordDictionary.groupNames.noGroup')}
              </MenuItemRadio>
              <MenuItemRadio {...bindSortAndFilter('quality')}>
                {t('chordDictionary.groupNames.byQuality')}
              </MenuItemRadio>
              <MenuItemRadio {...bindSortAndFilter('intervals')}>
                {t('chordDictionary.groupNames.byIntervals')}
              </MenuItemRadio>
            </MenuGroup>
            <Divider />
            <MenuGroup header={t('chordDictionary.filter')}>
              <MenuItemCheckbox
                checked={settings.chordDictionary.hideDisabled}
                variant="switch"
                onClick={toggleHideDisabled}
              >
                {t('chordDictionary.hideDisabledChords')}
              </MenuItemCheckbox>
              <MenuItemCheckbox
                checked={settings.chordDictionary.filterInKey}
                variant="switch"
                onClick={toggleFilterInKey}
              >
                {t('chordDictionary.onlyChordsInKey')}
              </MenuItemCheckbox>
            </MenuGroup>
          </Menu>
        )}
        <StackSeparator />
        <ChordSearch onSelect={handleChordSelect} />
        {!disableUpdate && (
          <ButtonGroup>
            <ToggleButton
              onClick={handleToggleInteractive('detect')}
              selected={settings.chordDictionary.interactive === 'detect'}
            >
              {t('chordDictionary.detect')}
            </ToggleButton>
            <ToggleButton
              onClick={handleToggleInteractive('play')}
              selected={settings.chordDictionary.interactive === 'play'}
            >
              {t('chordDictionary.play')}
            </ToggleButton>
          </ButtonGroup>
        )}
        <Button
          onClick={() => setSettingsOpen(true)}
          intent="neutral"
          icon
          aria-label={t('chordDictionary.openDictionarySettings')}
        >
          <Icon name="settings" />
        </Button>
      </Toolbar>
      <Drawer
        open={settingsOpen}
        placement="right"
        size="lg"
        onClose={handleSettingsClosed}
        className={cx('base')}
        aria-label={t('chordDictionary.chordDictionarySettings')}
      >
        <ChordDictionarySettings />
      </Drawer>
    </>
  );
};

ChordDictionaryToolbar.defaultProps = {
  disableUpdate: false,
};

export default ChordDictionaryToolbar;
