import React, { useRef, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MidiMessage } from 'main/types';

import { getMidiCommand } from 'renderer/helpers';
import useMidiMessages from 'renderer/hooks/useMidiMessages';
import { Icon } from 'renderer/components';

import { formatMidiMessage } from './utils';
import { MIDI_CLOCK_CMD, MIDI_SYSEX_CMD } from './constants';

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
    <div className="flex flex-col h-full overflow-hidden gap-1">
      <div className="flex items-center gap-2 px-4 py-2 bg-base-100 shadow-sm border-b border-base-content/10">
        <button
          type="button"
          className={`btn btn-sm btn-primary ${displayTimingClock ? 'btn-active' : ''}`}
          onClick={toggleTimingClock}
        >
          <Icon name="clock" />
          {t('settings.debuggerSettings.midiClock')}
        </button>
      </div>
      <div className="flex flex-grow flex-shrink overflow-hidden p-4">
        <pre
          ref={preElementRef}
          className="user-select-text flex-grow flex-shrink overflow-auto m-0 p-4 border border-base-content/10 rounded-lg bg-base-200 text-sm leading-snug tracking-[-0.01em] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] transition-[border-color] duration-150"
          style={{
            fontFamily:
              "'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
          }}
        />
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)] border-t border-base-content/10">
        <button type="button" className="btn btn-error btn-sm" onClick={clearMessages}>
          <Icon name="trash" />
          {t('settings.debuggerSettings.clearMessages')}
        </button>
      </div>
    </div>
  );
};

export default Debugger;
