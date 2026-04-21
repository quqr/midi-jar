import React, { useCallback, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Note } from 'tonal';
import { MidiLearn } from '../MidiLearn';

import { InputNoteProps } from './types';

import styles from './InputNote.module.scss';

const cx = classNames.bind(styles);

const NOTES = 'A B C D E F G'.split(' ');
const ACCIDENTALS = '# b'.split(' ');
const OCTAVES = '0 1 2 3 4 5 6 7 8 9'.split(' ');

export const InputNote: React.FC<InputNoteProps> = ({
  className,
  value,
  onChange,
  withOctave,
  learn,
  ...rest
}) => {
  const [learning, setLearning] = useState(false);
  const learningPromise = useRef<Promise<void> | null>(null);
  const { t } = useTranslation();

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const currentNote = Note.get(value?.toString() || '');

      if (currentNote.empty && NOTES.includes(event.key)) return;
      if (
        currentNote.letter &&
        (currentNote.oct === undefined || currentNote.oct === null) &&
        !currentNote.acc &&
        ACCIDENTALS.includes(event.key)
      )
        return;

      if (
        currentNote.letter &&
        (currentNote.oct === undefined || currentNote.oct === null) &&
        event.key === currentNote.acc[0]
      )
        return;

      if (
        withOctave &&
        currentNote.letter &&
        (currentNote.oct === undefined || currentNote.oct === null) &&
        OCTAVES.includes(event.key)
      )
        return;

      event.preventDefault();
    },
    [value, withOctave]
  );

  const toggleLearning = () => setLearning((v) => !v);

  const handleLearn = useCallback(
    (midi: number) => {
      const inputNote = Note.fromMidi(midi);
      const note = Note.get(inputNote);
      if (withOctave) {
        onChange(note.name);
      } else {
        onChange(note.pc);
      }
      learningPromise.current = Promise.resolve();
      setLearning(false);
    },
    [onChange, withOctave]
  );

  return (
    <div className="join">
      <input
        className={cx('base', 'input', 'input-bordered', 'w-full', 'join-item', className)}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        {...rest}
      />
      {learn ? (
        <button
          type="button"
          className={cx('learn', 'btn', 'join-item', learning ? 'btn-success' : 'btn-neutral')}
          onClick={toggleLearning}
        >
          {learning ? '...' : t('common.learn')}
        </button>
      ) : null}
      {learning ? <MidiLearn type="note" onLearn={handleLearn} /> : null}
    </div>
  );
};

InputNote.defaultProps = {
  className: undefined,
  withOctave: false,
  learn: false,
};

export default InputNote;
