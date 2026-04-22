import React, { useCallback } from 'react';

import { useSettings } from 'renderer/contexts/Settings';
import useNotes from 'renderer/hooks/useNotes';
import { CircleFifths, ChordName } from 'renderer/components';

type Props = {
  disableUpdate?: boolean;
};

const CircleOfFifths: React.FC<Props> = ({ disableUpdate }) => {
  const { settings, updateSetting } = useSettings();

  const { key } = settings.notation;
  const {
    chords,
    pitchClasses,
    params: { keySignature },
  } = useNotes({
    key,
    midiChannel: 0,
    disabledChords: settings.chordDictionary.disabled,
  });

  const handleKeyChange = useCallback(
    (newKey: string) => {
      return updateSetting(`notation.key`, newKey);
    },
    [updateSetting]
  );

  if (!settings) return null;

  const config = settings.circleOfFifths;

  return (
    <div className="relative flex w-full h-full flex-col justify-center items-center overflow-hidden p-8 gap-4">
      <CircleFifths
        keySignature={keySignature}
        chord={chords[0]}
        notes={pitchClasses}
        onChange={disableUpdate ? undefined : handleKeyChange}
        config={config}
      >
        <div
          id="chord"
          className="flex text-[20px] overflow-hidden w-full h-full items-center justify-center font-semibold tracking-[0.03em]"
          style={{ textShadow: '0 0.05em 0.1em rgba(0, 0, 0, 0.6)' }}
        >
          <ChordName chord={chords[0]} hideRoot />
        </div>
      </CircleFifths>
    </div>
  );
};

CircleOfFifths.defaultProps = {
  disableUpdate: false,
};

export default CircleOfFifths;
