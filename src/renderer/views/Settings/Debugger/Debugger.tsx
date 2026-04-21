import React, { useRef, useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { MidiMessage } from 'main/types';

import { getMidiCommand } from 'renderer/helpers';
import useMidiMessages from 'renderer/hooks/useMidiMessages';
import { Icon } from 'renderer/components';

import { formatMidiMessage } from './utils';
import { MIDI_CLOCK_CMD, MIDI_SYSEX_CMD } from './constants';

import styles from './Debugger.module.scss';

const cx = classnames.bind(styles);

const Debugger: React.FC = () => {
  const [displayTimingClock, setDisplayTimingClock] = useState(false);
  const { t } = useTranslation();

  const preElementRef = useRef<HTMLPreElement>(document.createElement('pre'));

  const shouldDisplayMessage = useCallback(
    (m: MidiMessage) => {
      const cmd = getMidiCommand(m);

      if (cmd === MIDI_SYSEX_CMD) {
        if (!displayTimingClock && m[0] === MIDI_CLOCK_CMD) {
          return false;
        }
      }

      return true;
    },
    [displayTimingClock]
  );

  const onMessages = useCallback(
    (messages: Array<[MidiMessage, number, string]>) => {
      if (preElementRef.current) {
        const formatted = messages.reduce(
          (out, [message, timestamp, device]) =>
            shouldDisplayMessage(message)
              ? out
                  .concat('[')
                  .concat(timestamp.toFixed(4))
                  .concat('] ')
                  .concat(device)
                  .concat(': ')
                  .concat(formatMidiMessage(message))
                  .concat('\n')
              : out,
          ''
        );
        preElementRef.current.append(formatted);
        preElementRef.current.scrollTop = preElementRef.current.scrollHeight;
      }
    },
    [shouldDisplayMessage]
  );

  const clearMessages = useCallback(() => {
    if (preElementRef.current) {
      preElementRef.current.innerHTML = '';
    }
  }, []);

  const toggleTimingClock = () => setDisplayTimingClock((v) => !v);

  useMidiMessages(onMessages);

  return (
    <div className={cx('base')}>
      <div className={cx('toolbar')}>
        <button
          type="button"
          className={`btn ${displayTimingClock ? 'btn-active' : ''} btn-sm`}
          onClick={toggleTimingClock}
        >
          <Icon name="clock" />
          {t('settings.debuggerSettings.midiClock')}
        </button>
      </div>
      <div className={cx('container')}>
        <pre ref={preElementRef} className={cx('output')} />
      </div>
      <div className={cx('footer')}>
        <button type="button" className="btn btn-neutral btn-sm" onClick={clearMessages}>
          <Icon name="trash" />
          {t('settings.debuggerSettings.clearMessages')}
        </button>
      </div>
    </div>
  );
};

export default Debugger;
