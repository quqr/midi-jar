import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useSettings } from 'renderer/contexts/Settings';
import { Icon, NavTab } from 'renderer/components';

import { addModule } from './utils';
import ChordDisplayAddModal from './ChordDisplayAddModal';

const ChordDisplayList: React.FC = () => {
  const navigate = useNavigate();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { t } = useTranslation();

  const { settings, updateSetting } = useSettings();

  const handleAdd = () => setAddModalOpen(true);

  const handleCancel = () => setAddModalOpen(false);

  const handleSave = (name: string) => {
    try {
      return updateSetting('chordDisplay', addModule(name, settings.chordDisplay)).then(() => {
        setAddModalOpen(false);
        navigate(`./${name}`);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const moduleIds = settings.chordDisplay.map((module) => module.id);

  return (
    <>
      <div className="flex items-center gap-2 p-2 bg-base-100 shadow-lg">
        <div
          className="tabs tabs-boxed"
          aria-label={t('settings.chordDisplaySettings.chordDisplayList')}
        >
          {moduleIds.map((moduleId) => (
            <NavTab key={moduleId} to={`/settings/chords/${moduleId}`}>
              {moduleId}
            </NavTab>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-success btn-sm"
          aria-label={t('settings.chordDisplaySettings.addSession')}
          onClick={handleAdd}
        >
          <Icon name="plus" />
        </button>
      </div>
      <ChordDisplayAddModal open={addModalOpen} onSave={handleSave} onCancel={handleCancel} />
    </>
  );
};

export default ChordDisplayList;
