/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useMemo, useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Chord, Note } from 'tonal';

import { KeyboardSettings } from 'main/types';
import { defaultKeyboardSettings } from 'main/store/defaults';

import { useSettings } from 'renderer/contexts/Settings';
import { ALIAS_NOTATION, getChordDegrees, getNoteInKeySignature } from 'renderer/helpers';
import {
  ChordIntervals,
  ChordName,
  Icon,
  NavButton,
  Notation,
  PianoKeyboard,
} from 'renderer/components';

import { useChordDictionaryModule } from '../ChordDictionaryModuleProvider';

import {
  getAlternativeChords,
  getChordInversion,
  getSubsetChords,
  getSupersetChords,
} from './utils';
import { EmptyChordDetail } from './EmptyChordDetail';

const KEYBOARD_SETTINGS: KeyboardSettings = {
  ...defaultKeyboardSettings,
  skin: 'classic',
  from: 'C3',
  to: 'B5',
  label: 'chordNote',
  keyName: 'none',
  keyInfo: 'tonicAndInterval',
  textOpacity: 1,
  displaySustained: true,
  wrap: true,
  sizes: {
    radius: 0.4,
    height: 4,
    ratio: 0.6,
    bevel: true,
  },
};

const NOTATION_LABELS = ['long', 'short', 'symbol'];

const ChordDetail: React.FC = () => {
  const {
    keySignature,
    midiNotes,
    playedMidiNotes,
    sustainedMidiNotes,
    pitchClasses,
    disableUpdate,
  } = useChordDictionaryModule();

  const ref = useRef<HTMLDivElement>(null);
  const { chordName } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { settings, updateSetting } = useSettings();
  const { staffClef, staffTranspose } = settings.notation;

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView(true);
    }
  }, [chordName]);

  const chord = useMemo(() => (chordName ? Chord.get(chordName) : null), [chordName]);
  const isDisabled = useMemo(
    () => chord && settings.chordDictionary.disabled.includes(chord.aliases[0]),
    [chord, settings.chordDictionary.disabled]
  );
  const preferredAlias = useMemo(() => {
    if (!chord) return null;

    const alias = settings.chordDictionary.aliases.find((a) => a[0] === chord.aliases[0]);

    return alias ? alias[1] : null;
  }, [chord, settings.chordDictionary.aliases]);

  if (!chordName) {
    return <EmptyChordDetail />;
  }

  if (!chord) {
    return <EmptyChordDetail chordName={chordName} />;
  }

  const midi = getChordInversion(chord, 0);
  const alternativeChords = getAlternativeChords(
    chord,
    keySignature,
    settings.chordDictionary.disabled,
    settings.chordDictionary.hideDisabled
  );
  const subsetChords = getSubsetChords(
    chord,
    settings.chordDictionary.disabled,
    settings.chordDictionary.hideDisabled
  );
  const supersetChords = getSupersetChords(
    chord,
    keySignature,
    settings.chordDictionary.filterInKey,
    settings.chordDictionary.disabled,
    settings.chordDictionary.hideDisabled
  );
  const goToChordDetail = (name: string) => {
    navigate(`../${encodeURIComponent(name)}`);
  };

  const playedIntervals = getChordDegrees(chord, pitchClasses ?? []);

  const toggleDisabled = (isEnabled: boolean) => {
    const disabled = isEnabled
      ? settings.chordDictionary.disabled.filter((c) => c !== chord.aliases[0])
      : [...settings.chordDictionary.disabled, chord.aliases[0]];

    updateSetting('chordDictionary.disabled', disabled);
  };

  const toggleAlias = (isPreferred: boolean, alias: string) => {
    const aliases = settings.chordDictionary.aliases.filter((a) => a[0] !== chord.aliases[0]);

    if (!isPreferred) {
      updateSetting('chordDictionary.aliases', [...aliases, [chord.aliases[0], alias]]);
    } else {
      updateSetting('chordDictionary.aliases', aliases);
    }
  };

  return (
    <div ref={ref} className="flex flex-col items-center px-4 max-w-7xl mx-auto lg:px-6">
      <h1 className="flex justify-center items-center border-b-2 border-neutral-300 mx-0 mb-2 px-0 py-2 w-full flex-wrap gap-2 sm:gap-3">
        <ChordName
          className={`text-[min(64px,6vw)] flex-grow flex-shrink-0 justify-center font-bold leading-tight text-neutral-1000 ${
            isDisabled ? 'opacity-50' : ''
          }`}
          chord={chord}
        />
        {!disableUpdate && (
          <div className="tooltip tooltip-left" data-tip={t('chordDictionary.disableEnableChord')}>
            <label>
              <input
                type="checkbox"
                className="toggle"
                id="toggleChord"
                checked={!isDisabled}
                onChange={(e) => toggleDisabled(e.target.checked)}
              />
            </label>
          </div>
        )}
      </h1>
      <div className="text-center text-[min(24px,4vw)] font-normal text-neutral-700 leading-snug">
        {chord.name}
      </div>
      <PianoKeyboard
        className="w-full my-6 p-4 bg-neutral-100 rounded-lg shadow-sm"
        targets={midi}
        played={playedMidiNotes}
        sustained={sustainedMidiNotes}
        midi={midiNotes}
        chord={chord}
        keyboard={KEYBOARD_SETTINGS}
      />
      <div className="flex flex-row flex-wrap gap-6 w-full mb-4">
        <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
            {t('chordDictionary.intervals')}
          </h2>
          <ChordIntervals
            className="text-[min(1.15em,1.75vw)] justify-center"
            intervals={playedIntervals}
            targets={chord.intervals}
            pitchClasses={pitchClasses}
            tonic={chord.tonic}
          />
        </section>
        <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
            {t('chordDictionary.notation')}
          </h2>
          <Notation
            className="mx-auto w-48 text-center p-2 bg-neutral-100 rounded-md shadow-sm"
            midiNotes={midi}
            keySignature={keySignature}
            staffClef={staffClef}
            staffTranspose={staffTranspose}
          />
        </section>
      </div>

      <div className="flex flex-row flex-wrap gap-6 w-full mb-4">
        <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
            {t('chordDictionary.aliases')}
          </h2>
          <ul>
            {chord.aliases.map((alias, index) => {
              const isPreferred = preferredAlias === alias;
              const isDefault =
                preferredAlias === null &&
                index === ALIAS_NOTATION[settings.chordDictionary.defaultNotation || 0];

              return (
                <li
                  className={`p-2 px-4 mb-1 rounded-md transition-colors duration-150 hover:bg-white/5 ${
                    isPreferred || isDefault ? 'bg-white/10 border-l-[3px] border-warning-400' : ''
                  }`}
                  key={index}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      {index < NOTATION_LABELS.length && (
                        <span className="badge badge-primary badge-sm">
                          {NOTATION_LABELS[index]}
                        </span>
                      )}
                      <ChordName chord={chord} notation={index} />
                    </div>
                    {disableUpdate ? (
                      <Icon name={isPreferred || isDefault ? 'star-filled' : 'star'} />
                    ) : (
                      <div
                        className="tooltip"
                        data-tip={
                          isPreferred
                            ? t('chordDictionary.unsetAsPreferred')
                            : t('chordDictionary.setAsPreferred')
                        }
                      >
                        <button
                          type="button"
                          aria-label={
                            isPreferred
                              ? t('chordDictionary.unsetAsPreferredAlias', {
                                  alias: chord.aliases[index],
                                })
                              : t('chordDictionary.setAsPreferredAlias', {
                                  alias: chord.aliases[index],
                                })
                          }
                          className={`btn btn-sm btn-circle ${
                            isPreferred ? 'btn-warning' : 'btn-ghost'
                          }`}
                          onClick={() => toggleAlias(isPreferred, chord.aliases[index])}
                        >
                          <Icon name={isPreferred || isDefault ? 'star-filled' : 'star'} />
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        {!!alternativeChords.length && (
          <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
              {t('chordDictionary.otherInterpretations')}
            </h2>
            <ul>
              {alternativeChords.map((altChord) => (
                <li key={altChord.symbol}>
                  <button
                    type="button"
                    className="btn btn-ghost w-full justify-start"
                    onClick={() => goToChordDetail(`${altChord.tonic + altChord.aliases[0]}`)}
                  >
                    <ChordName chord={altChord} />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <div className="flex flex-row flex-wrap gap-6 w-full mb-4">
        <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
            {t('chordDictionary.inversions')}
          </h2>
          {chord.intervals.map((_, index) => {
            if (!index) return null;

            const interval = chord.intervals[index].replace('*', '');
            const root = chord.notes[index];
            const slashChord = { ...chord, root, rootDegree: index };
            const inversionMidi = getChordInversion(chord, index);
            const altChord = alternativeChords.find(
              (c) => c.tonic && Note.chroma(c.tonic) === Note.chroma(root)
            );
            const altChordName =
              altChord && altChord.tonic
                ? getNoteInKeySignature(altChord.tonic, keySignature.notes) + altChord.aliases[0]
                : '';

            return (
              <div
                key={index}
                className="flex flex-row items-center flex-wrap w-full gap-4 p-4 mb-2 bg-neutral-100 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-basis-[200px] flex-grow-0">
                  <ChordName
                    className="text-2xl font-semibold text-neutral-1000"
                    chord={slashChord}
                  />
                  <div className="italic text-neutral-600 mt-1">
                    {t('chordDictionary.inversionOn', { interval })}
                  </div>
                  {altChord && (
                    <div className="mt-4 text-sm">
                      {t('chordDictionary.seeAlso')}
                      <NavLink
                        to={`../${encodeURIComponent(altChord.tonic + altChord.aliases[0])}`}
                        className="link link-primary"
                      >
                        {altChordName}
                      </NavLink>
                    </div>
                  )}
                </div>
                <PianoKeyboard
                  className="flex-grow flex-basis-[400px]"
                  played={inversionMidi}
                  midi={inversionMidi}
                  chord={slashChord}
                  keyboard={KEYBOARD_SETTINGS}
                />
                <Notation
                  className="w-24 mx-auto p-1 bg-neutral-200 rounded-sm"
                  midiNotes={inversionMidi}
                  keySignature={keySignature}
                  staffClef={staffClef}
                  staffTranspose={staffTranspose}
                />
              </div>
            );
          })}
        </section>
      </div>
      <div className="flex flex-row flex-wrap gap-6 w-full mb-4">
        {!!subsetChords.length && (
          <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
              {t('chordDictionary.simplified')}
            </h2>
            <div className="flex flex-row flex-wrap gap-2">
              {subsetChords.map((c, index) => (
                <NavButton
                  key={index}
                  className="btn-primary btn-sm rounded-full [--Button_textTransform:none]"
                  to={`../${encodeURIComponent(c.tonic + c.aliases[0])}`}
                >
                  <ChordName chord={c} />
                </NavButton>
              ))}
            </div>
          </section>
        )}
        {!!supersetChords.length && (
          <section className="flex-basis-[320px] flex-grow items-center justify-center min-w-[280px] p-4 bg-neutral-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="flex my-0 mt-8 mb-4 uppercase w-full items-center gap-4 font-semibold text-sm text-neutral-700 tracking-wider [&::before]:[content:' '] [&::before]:flex-grow [&::before]:flex-basis-0 [&::before]:border-b [&::before]:border-neutral-300 [&::after]:[content:' '] [&::after]:flex-grow [&::after]:flex-basis-0 [&::after]:border-b [&::after]:border-neutral-300">
              {t('chordDictionary.extended')}
            </h2>
            <div className="flex flex-row flex-wrap gap-2">
              {supersetChords.map((c, index) => (
                <NavButton
                  key={index}
                  className="btn-primary btn-sm rounded-full [--Button_textTransform:none]"
                  to={`../${encodeURIComponent(c.tonic + c.aliases[0])}`}
                >
                  <ChordName chord={c} />
                </NavButton>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ChordDetail;
