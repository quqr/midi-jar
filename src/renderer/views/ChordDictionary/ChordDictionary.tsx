import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Chord, Note } from 'tonal';

import { useSettings } from 'renderer/contexts/Settings';
import useNotes from 'renderer/hooks/useNotes';
import { NOTE_NAMES, getNoteInKeySignature } from 'renderer/helpers';

import ChordDictionaryChromaMenu from './ChordDictionaryChromaMenu';
import ChordDictionaryChordMenu from './ChordDictionaryChordMenu';
import ChordDictionaryToolbar from './ChordDictionaryToolbar';
import ChordDictionaryModuleProvider from './ChordDictionaryModuleProvider';

type Props = {
  disableUpdate?: boolean;
};

const ChordDictionary: React.FC<Props> = ({ disableUpdate }) => {
  const { settings } = useSettings();
  const { chordName } = useParams();

  const { key, accidentals } = settings.notation;
  const {
    chords,
    midiNotes,
    playedMidiNotes,
    sustainedMidiNotes,
    pitchClasses,
    params: { keySignature },
  } = useNotes({
    key,
    accidentals,
    midiChannel: 0,
    useSustain: true,
    detectOnRelease: false,
    disabledChords: settings.chordDictionary.disabled,
  });

  const navigate = useNavigate();

  const [chroma, setChroma] = useState<number | null>(null);
  const [chordType, setChordType] = useState<string | null>(null);

  const navigateToChord = useCallback(
    (tonic: string | null, type: string | null) => {
      if (!tonic || type === null) {
        navigate('./');
      } else {
        const name = encodeURIComponent(
          `${getNoteInKeySignature(tonic, keySignature.notes)}${type}`
        );
        navigate(`./${name}`);
      }
    },
    [navigate, keySignature]
  );

  const handleChromaChange = (newChroma: number) => {
    setChroma(newChroma);
    if (settings.chordDictionary.filterInKey) {
      setChordType(null);
      navigateToChord(NOTE_NAMES[newChroma], null);
    } else {
      navigateToChord(NOTE_NAMES[newChroma], chordType);
    }
  };

  const handleChordTypeChange = (newChordType: string) => {
    setChordType(newChordType);
    navigateToChord(chroma !== null ? NOTE_NAMES[chroma] : null, newChordType);
  };

  useEffect(() => {
    if (settings.chordDictionary.interactive === 'detect') {
      if (chords[0] && chords[0].tonic) {
        navigateToChord(chords[0].tonic, chords[0].aliases[0]);
      }
    }
  }, [settings.chordDictionary.interactive, chords, navigateToChord]);

  useEffect(() => {
    const chord = chordName ? Chord.get(chordName) : null;

    if (chord && chord.tonic) {
      setChroma(Note.chroma(chord.tonic) ?? null);
      setChordType(chord.aliases[0]);
    }
  }, [chordName]);

  return (
    <ChordDictionaryModuleProvider
      midiNotes={midiNotes}
      playedMidiNotes={playedMidiNotes}
      sustainedMidiNotes={sustainedMidiNotes}
      pitchClasses={pitchClasses}
      keySignature={keySignature}
      disableUpdate={disableUpdate}
    >
      <ChordDictionaryToolbar disableUpdate={disableUpdate} />
      <div className="relative flex flex-col w-full h-full justify-end items-center overflow-hidden flex-1">
        <div className="w-[200px] min-w-[200px] max-w-[200px] h-full overflow-y-auto overflow-x-hidden border-r border-neutral-300 bg-neutral-100 transition-[width,opacity] duration-300">
          <ChordDictionaryChromaMenu
            keySignature={keySignature}
            selected={chroma}
            onSelect={handleChromaChange}
            filterChordsInKey={settings.chordDictionary.filterInKey}
          />
        </div>
        <div className="h-full flex-1 min-w-0 overflow-hidden flex flex-1">
          <div className="flex w-full h-full overflow-hidden">
            <div className="w-[280px] min-w-[280px] max-w-[280px] h-full overflow-y-auto overflow-x-hidden border-r border-neutral-300 bg-neutral-100 transition-[width,opacity] duration-300">
              <ChordDictionaryChordMenu
                keySignature={keySignature}
                selected={chordType}
                onSelect={handleChordTypeChange}
                chroma={chroma}
                groupBy={settings.chordDictionary.groupBy}
                disabledChords={settings.chordDictionary.disabled}
                hideDisabled={settings.chordDictionary.hideDisabled}
                filterChordsInKey={settings.chordDictionary.filterInKey}
              />
            </div>
            <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-neutral-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ChordDictionaryModuleProvider>
  );
};

ChordDictionary.defaultProps = {
  disableUpdate: false,
};

export default ChordDictionary;
