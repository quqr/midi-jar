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
              <label
                htmlFor="displayChord"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayChord')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayChordHint')}
                </span>
                <input
                  id="displayChord"
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('displayChord', e.target.checked)}
                  checked={moduleSettings.displayChord}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="displayAltChords"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayAltChords')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayAltChordsHint')}
                </span>
                <input
                  id="displayAltChords"
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('displayAltChords', e.target.checked)}
                  checked={moduleSettings.displayAltChords}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="displayName"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayChordName')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayChordNameHint')}
                </span>
                <input
                  id="displayName"
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('displayName', e.target.checked)}
                  checked={moduleSettings.displayName}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="chordNotation"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.chordNotation')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.chordNotationHint')}
                </span>
                <select
                  id="chordNotation"
                  className="select select-bordered w-full"
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
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.highlightAlterations')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.highlightAlterationsHint')}
                </span>
                <input
                  id="highlightAlterations"
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('highlightAlterations', e.target.checked)}
                  checked={moduleSettings.highlightAlterations}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="allowOmissions"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.allowOmissions')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.allowOmissionsHint')}
                </span>
                <input
                  id="allowOmissions"
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('allowOmissions', e.target.checked)}
                  checked={moduleSettings.allowOmissions}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label
                htmlFor="useSustainPedal"
                className="label cursor-pointer flex-row-reverse justify-between"
              >
                <span className="label-text">
                  {t('settings.chordDisplaySettings.useSustainPedal')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.useSustainPedalHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('useSustain', e.target.checked)}
                  checked={moduleSettings.useSustain}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.detectOnRelease')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.detectOnReleaseHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayNotation')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayNotationHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('displayNotation', e.target.checked)}
                  checked={moduleSettings.displayNotation}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayIntervals')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayIntervalsHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displayKeyboard')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displayKeyboardHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('displayKeyboard', e.target.checked)}
                  checked={moduleSettings.displayKeyboard}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.noteStart')}</span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.noteStartHint')}
                </span>
                <InputNote
                  onChange={(value) => updateModuleSetting('keyboard.from', value)}
                  value={moduleSettings.keyboard.from}
                  withOctave
                  learn
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.noteEnd')}</span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.noteEndHint')}
                </span>
                <InputNote
                  onChange={(value) => updateModuleSetting('keyboard.to', value)}
                  value={moduleSettings.keyboard.to}
                  withOctave
                  learn
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.wrapKeyboard')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.wrapKeyboardHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => updateModuleSetting('keyboard.wrap', e.target.checked)}
                  checked={moduleSettings.keyboard.wrap}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.displaySustainedNotes')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.displaySustainedNotesHint')}
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) =>
                    updateModuleSetting('keyboard.displaySustained', e.target.checked)
                  }
                  checked={moduleSettings.keyboard.displaySustained}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.keyNames')}</span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.keyNamesHint')}
                </span>
                <select
                  className="select select-bordered w-full"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.playedKeyInfo')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.playedKeyInfoHint')}
                </span>
                <select
                  className="select select-bordered w-full"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.playedKeyLabel')}
                </span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.playedKeyLabelHint')}
                </span>
                <select
                  className="select select-bordered w-full"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.skin')}</span>
                <span className="label-text-alt">
                  {t('settings.chordDisplaySettings.skinHint')}
                </span>
                <select
                  className="select select-bordered w-full"
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
                <label className="label cursor-pointer flex-row-reverse justify-between">
                  <span className="label-text">{t('settings.chordDisplaySettings.keyBevel')}</span>
                  <span className="label-text-alt">
                    {t('settings.chordDisplaySettings.keyBevelHint')}
                  </span>
                  <input
                    type="checkbox"
                    className="toggle"
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
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.blackKeys')}</span>
                <InputColor
                  onChange={(value) => updateModuleSetting('keyboard.colors.black', value)}
                  value={moduleSettings.keyboard.colors.black}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.whiteKeys')}</span>
                <InputColor
                  onChange={(value) => updateModuleSetting('keyboard.colors.white', value)}
                  value={moduleSettings.keyboard.colors.white}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.playedKeys')}</span>
                <InputColor
                  onChange={(value) => updateModuleSetting('keyboard.colors.played', value)}
                  value={moduleSettings.keyboard.colors.played}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">{t('settings.chordDisplaySettings.wrappedKeys')}</span>
                <InputColor
                  onChange={(value) => updateModuleSetting('keyboard.colors.wrapped', value)}
                  value={moduleSettings.keyboard.colors.wrapped}
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label cursor-pointer flex-row-reverse justify-between">
                <span className="label-text">
                  {t('settings.chordDisplaySettings.sustainedKeys')}
                </span>
                <InputColor
                  onChange={(value) => updateModuleSetting('keyboard.colors.sustained', value)}
                  value={moduleSettings.keyboard.colors.sustained}
                />
              </label>
            </div>
          </fieldset>
        </div>
      </ScrollContainer>
      <div className="flex items-center gap-2 p-2 fixed bottom-0 left-0 right-0 z-10 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]">
        <button type="button" className="btn btn-neutral" onClick={() => resetModuleSettings()}>
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </button>
        <div className="border-t border-base-300 my-0 mx-2" />
        <button type="button" className="btn btn-neutral" onClick={handleDeleteModule}>
          <Icon name="trash" />
          {t('common.delete')}
        </button>
      </div>
    </>
  );
};

export default ChordDisplayModuleSettings;
