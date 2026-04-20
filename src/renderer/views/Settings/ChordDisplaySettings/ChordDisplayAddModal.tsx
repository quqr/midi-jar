import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  FormField,
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
  ModalActionsSeparator,
  Input,
  StateButton,
} from '@la-jarre-a-son/ui';
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
    <Modal open={open} onClose={onCancel} size="sm">
      <ModalHeader title={t('settings.chordDisplaySettings.newModule')} />
      <ModalContent>
        <FormField label={t('common.name')} error={errors.name}>
          <Input value={name} onChange={setName} autoFocus />
        </FormField>
      </ModalContent>
      <ModalActions>
        <Button variant="ghost" intent="neutral" onClick={onCancel}>
          {t('common.cancel')}
        </Button>
        <ModalActionsSeparator />
        <StateButton intent="success" onClick={handleSave}>
          {t('common.add')}
        </StateButton>
      </ModalActions>
    </Modal>
  );
};

export default ChordDisplayAddModal;
