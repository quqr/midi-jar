import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FieldError } from './utils';

type Props = {
  open: boolean;
  onCancel: () => void;
  onSave: (name: string) => Promise<unknown>;
};

const ChordDisplayAddModal: React.FC<Props> = ({ open, onCancel, onSave }) => {
  const [name, setName] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { t } = useTranslation();

  const handleSave = () => {
    return onSave(name)
      .then(() => setName(''))
      .catch((err) => (err instanceof FieldError ? setErrors(err.fields) : null));
  };

  return (
    <dialog className={`modal ${open ? 'modal-open' : ''}`} open={open}>
      <div className="modal-box modal-sm">
        <h3 className="font-bold text-lg">{t('settings.chordDisplaySettings.newModule')}</h3>
        <div className="modal-content py-4">
          <div className="form-control w-full">
            <label htmlFor="newModuleName" className="label">
              <span className="label-text">{t('common.name')}</span>
            </label>
            <input
              id="newModuleName"
              type="text"
              placeholder={t('common.name')}
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <label htmlFor="newModuleName" className="label">
                <span className="label-text-alt text-error">{errors.name}</span>
              </label>
            )}
          </div>
        </div>
        <div className="modal-action">
          <button type="button" className="btn btn-ghost" onClick={onCancel}>
            {t('common.cancel')}
          </button>
          <button type="button" className="btn btn-success" onClick={handleSave}>
            {t('common.add')}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onCancel}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default ChordDisplayAddModal;
