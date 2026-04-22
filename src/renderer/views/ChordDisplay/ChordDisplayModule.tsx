import React from 'react';

import { useModuleSettings, useSettings } from 'renderer/contexts/Settings';
import useNotes from 'renderer/hooks/useNotes';
import { Notation, PianoKeyboard, ChordIntervals, ChordNameLink } from 'renderer/components';

type Props = {
  moduleId: string;
};

const ChordDisplayModule: React.FC<Props> = ({ moduleId }) => {
  const { settings } = useSettings();
  const { moduleSettings } = useModuleSettings('chordDisplay', moduleId);

  const { key, accidentals, staffClef, staffTranspose } = settings.notation;
  const {
    midiNotes,
    pitchClasses,
    sustainedMidiNotes,
    playedMidiNotes,
    chords,
    params: { keySignature },
  } = useNotes({
    accidentals,
    key,
    midiChannel: 0,
    allowOmissions: moduleSettings.allowOmissions,
    useSustain: moduleSettings.useSustain,
    detectOnRelease: moduleSettings.detectOnRelease,
    disabledChords: settings.chordDictionary.disabled,
  });

  if (!settings || !moduleSettings) return null;

  const {
    chordNotation,
    highlightAlterations,
    displayKeyboard,
    displayChord,
    displayName,
    displayNotation,
    displayAltChords,
    displayIntervals,
    keyboard,
  } = moduleSettings;

  return (
    <div
      id="chordDisplay"
      className="relative flex w-full h-full flex-col items-center justify-end overflow-hidden p-4 gap-2"
    >
      <div
        id="container"
        className="flex flex-row flex-grow flex-shrink items-center justify-center w-full overflow-hidden"
      >
        {displayNotation && (
          <Notation
            id="notation"
            className={`flex flex-shrink-0 flex-grow-0 p-4 h-[60vh] rounded-xl shadow-md${
              displayChord ? ' max-w-[30vw]' : ''
            }`}
            midiNotes={midiNotes}
            keySignature={keySignature}
            staffClef={staffClef}
            staffTranspose={staffTranspose}
          />
        )}
        <div
          id="display"
          className="relative z-1 flex flex-col flex-grow flex-shrink items-center justify-center h-full gap-2"
          style={{ textShadow: '0 0.05em 0.1em rgba(0, 0, 0, 0.6)' }}
        >
          {displayChord && (
            <div
              id="chord"
              className={`flex flex-col flex-grow flex-shrink items-center justify-center overflow-hidden font-bold text-[10vw] tracking-[0.02em]${
                displayNotation ? ' text-[8vw]' : ''
              }`}
            >
              <ChordNameLink
                chord={chords[0]}
                notation={chordNotation}
                highlightAlterations={highlightAlterations}
              />
            </div>
          )}
          {displayName && (
            <div
              id="name"
              className="text-[20px] leading-tight min-h-[3vh] px-4 text-center font-semibold opacity-90"
            >
              {chords[0] && chords[0].name}
            </div>
          )}
          {displayIntervals && (
            <div
              id="intervals"
              className="text-[min(2vh,3vw)] font-medium tracking-[0.05em] transition-opacity duration-150"
            >
              <ChordIntervals
                intervals={chords[0]?.intervals}
                pitchClasses={pitchClasses}
                tonic={chords[0]?.tonic}
              />
            </div>
          )}
          {displayAltChords && (
            <div
              id="alternativeChords"
              className="absolute z-2 top-0 right-0 p-2 text-[4vh] flex flex-col gap-1"
              style={{ textShadow: '0 0.05em 0.1em rgba(0, 0, 0, 0.6)' }}
            >
              {chords.map((chord, index) =>
                index > 0 ? (
                  <ChordNameLink
                    key={index}
                    chord={chord}
                    notation={chordNotation}
                    highlightAlterations={highlightAlterations}
                  />
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
      {displayKeyboard && (
        <div className="w-full flex flex-col items-stretch">
          <PianoKeyboard
            id="keyboard"
            className={`w-full flex-shrink-0 flex-grow-0 max-h-full rounded-lg shadow-md${
              displayNotation || displayChord ? ' max-h-[40vh]' : ''
            }`}
            sustained={sustainedMidiNotes}
            played={playedMidiNotes}
            midi={midiNotes}
            chord={chords[0] ?? undefined}
            keySignature={keySignature}
            keyboard={keyboard}
          />
        </div>
      )}
    </div>
  );
};

export default ChordDisplayModule;
