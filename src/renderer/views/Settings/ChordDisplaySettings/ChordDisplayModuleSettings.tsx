/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useModuleSettings } from 'renderer/contexts/Settings';

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
      <ScrollContainer className="p-4">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">{t('settings.chordDisplaySettings.chords')}</legend>

            <div className="form-control w-full">
              <label htmlFor="displayChord" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayChord')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayChordHint')}
                  </span>
                </div>
                <input
                  id="displayChord"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayChord', e.target.checked)}
                  checked={moduleSettings.displayChord}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="displayAltChords" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayAltChords')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayAltChordsHint')}
                  </span>
                </div>
                <input
                  id="displayAltChords"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayAltChords', e.target.checked)}
                  checked={moduleSettings.displayAltChords}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="displayName" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayChordName')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayChordNameHint')}
                  </span>
                </div>
                <input
                  id="displayName"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayName', e.target.checked)}
                  checked={moduleSettings.displayName}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="chordNotation" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.chordNotation')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.chordNotationHint')}
                  </span>
                </div>
                <select
                  id="chordNotation"
                  className="select select-bordered w-full max-w-xs"
                  value={moduleSettings.chordNotation}
                  onChange={(e) => updateModuleSetting('chordNotation', e.target.value)}
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
                htmlFor="highlightAlterations"
                className="label cursor-pointer justify-between"
              >
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.highlightAlterations')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.highlightAlterationsHint')}
                  </span>
                </div>
                <input
                  id="highlightAlterations"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('highlightAlterations', e.target.checked)}
                  checked={moduleSettings.highlightAlterations}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="allowOmissions" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.allowOmissions')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.allowOmissionsHint')}
                  </span>
                </div>
                <input
                  id="allowOmissions"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('allowOmissions', e.target.checked)}
                  checked={moduleSettings.allowOmissions}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="useSustainPedal" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.useSustainPedal')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.useSustainPedalHint')}
                  </span>
                </div>
                <input
                  id="useSustainPedal"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('useSustain', e.target.checked)}
                  checked={moduleSettings.useSustain}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="detectOnRelease" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.detectOnRelease')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.detectOnReleaseHint')}
                  </span>
                </div>
                <input
                  id="detectOnRelease"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('detectOnRelease', e.target.checked)}
                  checked={moduleSettings.detectOnRelease}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {t('settings.chordDisplaySettings.additionalInfo')}
            </legend>

            <div className="form-control w-full">
              <label htmlFor="displayNotation" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayNotation')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayNotationHint')}
                  </span>
                </div>
                <input
                  id="displayNotation"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayNotation', e.target.checked)}
                  checked={moduleSettings.displayNotation}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="displayIntervals" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayIntervals')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayIntervalsHint')}
                  </span>
                </div>
                <input
                  id="displayIntervals"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayIntervals', e.target.checked)}
                  checked={moduleSettings.displayIntervals}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {t('settings.chordDisplaySettings.keyboard')}
            </legend>

            <div className="form-control w-full">
              <label htmlFor="displayKeyboard" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displayKeyboard')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displayKeyboardHint')}
                  </span>
                </div>
                <input
                  id="displayKeyboard"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('displayKeyboard', e.target.checked)}
                  checked={moduleSettings.displayKeyboard}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="noteStart" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">{t('settings.chordDisplaySettings.noteStart')}</span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.noteStartHint')}
                  </span>
                </div>
                <InputNote
                  id="noteStart"
                  onChange={(value) => updateModuleSetting('keyboard.from', value)}
                  value={moduleSettings.keyboard.from}
                  withOctave
                  learn
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="noteEnd" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">{t('settings.chordDisplaySettings.noteEnd')}</span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.noteEndHint')}
                  </span>
                </div>
                <InputNote
                  id="noteEnd"
                  onChange={(value) => updateModuleSetting('keyboard.to', value)}
                  value={moduleSettings.keyboard.to}
                  withOctave
                  learn
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="wrapKeyboard" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.wrapKeyboard')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.wrapKeyboardHint')}
                  </span>
                </div>
                <input
                  id="wrapKeyboard"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) => updateModuleSetting('keyboard.wrap', e.target.checked)}
                  checked={moduleSettings.keyboard.wrap}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="displaySustainedNotes"
                className="label cursor-pointer justify-between"
              >
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.displaySustainedNotes')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.displaySustainedNotesHint')}
                  </span>
                </div>
                <input
                  id="displaySustainedNotes"
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={(e) =>
                    updateModuleSetting('keyboard.displaySustained', e.target.checked)
                  }
                  checked={moduleSettings.keyboard.displaySustained}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="keyNames" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">{t('settings.chordDisplaySettings.keyNames')}</span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.keyNamesHint')}
                  </span>
                </div>
                <select
                  id="keyNames"
                  className="select select-bordered w-full max-w-xs"
                  value={moduleSettings.keyboard.keyName}
                  onChange={(e) => updateModuleSetting('keyboard.keyName', e.target.value)}
                >
                  {fields.keyboard.keyName.choices.map((c: { value: string; label: string }) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="playedKeyInfo" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.playedKeyInfo')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.playedKeyInfoHint')}
                  </span>
                </div>
                <select
                  id="playedKeyInfo"
                  className="select select-bordered w-full max-w-xs"
                  value={moduleSettings.keyboard.keyInfo}
                  onChange={(e) => updateModuleSetting('keyboard.keyInfo', e.target.value)}
                >
                  {fields.keyboard.keyInfo.choices.map((c: { value: string; label: string }) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="playedKeyLabel" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">
                    {t('settings.chordDisplaySettings.playedKeyLabel')}
                  </span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.playedKeyLabelHint')}
                  </span>
                </div>
                <select
                  id="playedKeyLabel"
                  className="select select-bordered w-full max-w-xs"
                  value={moduleSettings.keyboard.label}
                  onChange={(e) => updateModuleSetting('keyboard.label', e.target.value)}
                >
                  {fields.keyboard.label.choices.map((c: { value: string; label: string }) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">
                  {t('settings.chordDisplaySettings.fadeOutDuration')}
                </span>
              </label>
              <label className="label">
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.fadeOutDurationHint')}
                </span>
              </label>
              <input
                type="range"
                className="range"
                value={moduleSettings.keyboard.fadeOutDuration}
                onChange={(e) =>
                  updateModuleSetting('keyboard.fadeOutDuration', Number(e.target.value))
                }
                min={0}
                max={1}
                step={0.1}
              />
              <p className="text-sm mt-1">{`${moduleSettings.keyboard.fadeOutDuration.toFixed(
                1
              )}s`}</p>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {t('settings.chordDisplaySettings.keyboardSkin')}
            </legend>

            <div className="form-control w-full">
              <label htmlFor="skin" className="label cursor-pointer justify-between">
                <div>
                  <span className="label-text">{t('settings.chordDisplaySettings.skin')}</span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.skinHint')}
                  </span>
                </div>
                <select
                  id="skin"
                  className="select select-bordered w-full max-w-xs"
                  value={moduleSettings.keyboard.skin}
                  onChange={(e) => updateModuleSetting('keyboard.skin', e.target.value)}
                >
                  {fields.keyboard.skin.choices.map((c: { value: string; label: string }) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">
                  {t('settings.chordDisplaySettings.textOpacity')}
                </span>
              </label>
              <label className="label">
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.textOpacityHint')}
                </span>
              </label>
              <input
                type="range"
                className="range"
                value={moduleSettings.keyboard.textOpacity}
                onChange={(e) =>
                  updateModuleSetting('keyboard.textOpacity', Number(e.target.value))
                }
                min={0}
                max={1}
                step={0.1}
              />
              <p className="text-sm mt-1">{`${moduleSettings.keyboard.textOpacity}`}</p>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">
                  {t('settings.chordDisplaySettings.keyHeight')}
                </span>
              </label>
              <label className="label">
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.keyHeightHint')}
                </span>
              </label>
              <input
                type="range"
                className="range"
                value={moduleSettings.keyboard.sizes.height}
                onChange={(e) =>
                  updateModuleSetting('keyboard.sizes.height', Number(e.target.value))
                }
                min={1}
                max={16}
                step={0.1}
              />
              <p className="text-sm mt-1">{`${moduleSettings.keyboard.sizes.height}`}</p>
            </div>

            {moduleSettings.keyboard.skin === 'classic' && (
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">
                    {t('settings.chordDisplaySettings.blackKeyRatio')}
                  </span>
                </label>
                <label className="label">
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.blackKeyRatioHint')}
                  </span>
                </label>
                <input
                  type="range"
                  className="range"
                  value={moduleSettings.keyboard.sizes.ratio}
                  onChange={(e) =>
                    updateModuleSetting('keyboard.sizes.ratio', Number(e.target.value))
                  }
                  min={0.1}
                  max={0.9}
                  step={0.025}
                />
                <p className="text-sm mt-1">{`${(moduleSettings.keyboard.sizes.ratio * 100).toFixed(
                  1
                )}%`}</p>
              </div>
            )}
            {moduleSettings.keyboard.skin === 'classic' && (
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">
                    {t('settings.chordDisplaySettings.keyBorderRadius')}
                  </span>
                </label>
                <input
                  type="range"
                  className="range"
                  value={moduleSettings.keyboard.sizes.radius}
                  onChange={(e) =>
                    updateModuleSetting('keyboard.sizes.radius', Number(e.target.value))
                  }
                  min={0}
                  max={1}
                  step={0.05}
                />
                <p className="text-sm mt-1">{`${Math.round(
                  moduleSettings.keyboard.sizes.radius * 100
                )}%`}</p>
              </div>
            )}
            {moduleSettings.keyboard.skin === 'classic' && (
              <div className="form-control w-full">
                <label htmlFor="keyBevel" className="label cursor-pointer justify-between">
                  <div>
                    <span className="label-text">
                      {t('settings.chordDisplaySettings.keyBevel')}
                    </span>
                    <span className="label-text-alt">
                      {t('settings.chordDisplaySettings.keyBevelHint')}
                    </span>
                  </div>
                  <input
                    id="keyBevel"
                    type="checkbox"
                    className="toggle toggle-primary"
                    onChange={(e) => updateModuleSetting('keyboard.sizes.bevel', e.target.checked)}
                    checked={moduleSettings.keyboard.sizes.bevel}
                  />
                </label>
              </div>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {t('settings.chordDisplaySettings.keyboardColors')}
            </legend>

            <div className="form-control w-full">
              <label htmlFor="blackKeys" className="label cursor-pointer justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.blackKeys')}</span>
                <InputColor
                  id="blackKeys"
                  onChange={(value) => updateModuleSetting('keyboard.colors.black', value)}
                  value={moduleSettings.keyboard.colors.black}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="whiteKeys" className="label cursor-pointer justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.whiteKeys')}</span>
                <InputColor
                  id="whiteKeys"
                  onChange={(value) => updateModuleSetting('keyboard.colors.white', value)}
                  value={moduleSettings.keyboard.colors.white}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="playedKeys" className="label cursor-pointer justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.playedKeys')}</span>
                <InputColor
                  id="playedKeys"
                  onChange={(value) => updateModuleSetting('keyboard.colors.played', value)}
                  value={moduleSettings.keyboard.colors.played}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="wrappedKeys" className="label cursor-pointer justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.wrappedKeys')}</span>
                <InputColor
                  id="wrappedKeys"
                  onChange={(value) => updateModuleSetting('keyboard.colors.wrapped', value)}
                  value={moduleSettings.keyboard.colors.wrapped}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label htmlFor="sustainedKeys" className="label cursor-pointer justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.sustainedKeys')}
                </span>
                <InputColor
                  id="sustainedKeys"
                  onChange={(value) => updateModuleSetting('keyboard.colors.sustained', value)}
                  value={moduleSettings.keyboard.colors.sustained}
                />
              </label>
            </div>
          </fieldset>
        </div>
      </ScrollContainer>
      <div className="flex items-center gap-2 p-2 fixed bottom-0 left-0 right-0 z-10 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => resetModuleSettings()}
        >
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </button>
        <button type="button" className="btn btn-error btn-sm" onClick={handleDeleteModule}>
          <Icon name="trash" />
          {t('common.delete')}
        </button>
      </div>
    </>
  );
};

export default ChordDisplayModuleSettings;
