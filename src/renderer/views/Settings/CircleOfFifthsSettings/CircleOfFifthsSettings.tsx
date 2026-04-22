import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';

import { Icon, ScrollContainer } from 'renderer/components';

import { fields } from './constants';

const CircleOfFifthsSettings: React.FC = () => {
  const { settings, updateSetting, resetSettings } = useSettings();
  const { t } = useTranslation();

  return (
    <>
      <ScrollContainer className="p-4">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="form-control w-full">
            <label htmlFor="displayMajor" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayMajor')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayMajorHint')}
                </span>
              </div>
              <input
                id="displayMajor"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displayMajor', e.target.checked)}
                checked={settings.circleOfFifths.displayMajor}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayMinor" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayMinor')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayMinorHint')}
                </span>
              </div>
              <input
                id="displayMinor"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displayMinor', e.target.checked)}
                checked={settings.circleOfFifths.displayMinor}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="mainScale-label" className="label">
              <span className="label-text font-medium">
                {t('settings.circleOfFifthsSettings.mainScale')}
              </span>
            </label>
            <label htmlFor="mainScale" className="label">
              <span className="label-text-alt">
                {t('settings.circleOfFifthsSettings.mainScaleHint')}
              </span>
            </label>
            <select
              id="mainScale"
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => updateSetting('circleOfFifths.scale', e.target.value)}
              value={settings.circleOfFifths.scale}
              disabled={
                !(settings.circleOfFifths.displayMajor && settings.circleOfFifths.displayMinor)
              }
            >
              {fields.scale.choices.map((c: { value: string; labelKey: string }) => (
                <option key={c.value} value={c.value}>
                  {t(c.labelKey)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayDiminished" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayDiminished')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayDiminishedHint')}
                </span>
              </div>
              <input
                id="displayDiminished"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) =>
                  updateSetting('circleOfFifths.displayDiminished', e.target.checked)
                }
                checked={settings.circleOfFifths.displayDiminished}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayDominants" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayDominantChords')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayDominantChordsHint')}
                </span>
              </div>
              <input
                id="displayDominants"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displayDominants', e.target.checked)}
                checked={settings.circleOfFifths.displayDominants}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displaySuspended" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displaySuspendedChords')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displaySuspendedChordsHint')}
                </span>
              </div>
              <input
                id="displaySuspended"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displaySuspended', e.target.checked)}
                checked={settings.circleOfFifths.displaySuspended}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayAlterations" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayAlterations')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayAlterationsHint')}
                </span>
              </div>
              <input
                id="displayAlterations"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) =>
                  updateSetting('circleOfFifths.displayAlterations', e.target.checked)
                }
                checked={settings.circleOfFifths.displayAlterations}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayModes" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayModes')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayModesHint')}
                </span>
              </div>
              <input
                id="displayModes"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displayModes', e.target.checked)}
                checked={settings.circleOfFifths.displayModes}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayDegrees" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayDegrees')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayDegreesHint')}
                </span>
              </div>
              <input
                id="displayDegrees"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.displayDegrees', e.target.checked)}
                checked={settings.circleOfFifths.displayDegrees}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="displayDegreeLabels" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.displayDegreeLabels')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.displayDegreeLabelsHint')}
                </span>
              </div>
              <input
                id="displayDegreeLabels"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) =>
                  updateSetting('circleOfFifths.displayDegreeLabels', e.target.checked)
                }
                checked={settings.circleOfFifths.displayDegreeLabels}
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label htmlFor="highlightSectors-label" className="label">
              <span className="label-text font-medium">
                {t('settings.circleOfFifthsSettings.highlightSectors')}
              </span>
            </label>
            <label htmlFor="highlightSectors" className="label">
              <span className="label-text-alt">
                {t('settings.circleOfFifthsSettings.highlightSectorsHint')}
              </span>
            </label>
            <select
              id="highlightSectors"
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => updateSetting('circleOfFifths.highlightSector', e.target.value)}
              value={settings.circleOfFifths.highlightSector}
            >
              {fields.highlightSector.choices.map((c: { value: string; labelKey: string }) => (
                <option key={c.value} value={c.value}>
                  {t(c.labelKey)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full">
            <label htmlFor="highlightInScale" className="label cursor-pointer justify-between">
              <div>
                <span className="label-text">
                  {t('settings.circleOfFifthsSettings.highlightSectorsInKey')}
                </span>
                <span className="label-text-alt">
                  {t('settings.circleOfFifthsSettings.highlightSectorsInKeyHint')}
                </span>
              </div>
              <input
                id="highlightInScale"
                type="checkbox"
                className="toggle toggle-primary"
                onChange={(e) => updateSetting('circleOfFifths.highlightInScale', e.target.checked)}
                checked={settings.circleOfFifths.highlightInScale}
              />
            </label>
          </div>
        </div>
      </ScrollContainer>
      <div className="flex items-center gap-2 p-2 fixed bottom-0 left-0 right-0 z-10 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]">
        <button
          type="button"
          className="btn btn-neutral"
          onClick={() => resetSettings('circleOfFifths')}
        >
          <Icon name="reset" />
          {t('common.resetToDefaults')}
        </button>
      </div>
    </>
  );
};

export default CircleOfFifthsSettings;
