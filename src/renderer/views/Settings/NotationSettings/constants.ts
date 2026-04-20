export const fields = {
  accidentals: {
    choices: [
      { value: 'flat', labelKey: 'flat' },
      { value: 'sharp', labelKey: 'sharp' },
    ],
  },
  staffClef: {
    choices: [
      { value: 'both', labelKey: 'bassTreble' },
      { value: 'bass', labelKey: 'bass' },
      { value: 'treble', labelKey: 'treble' },
    ],
  },
  keySignature: {
    choices: [
      { value: 'C', labelKey: 'C' },
      { value: 'G', labelKey: 'G' },
      { value: 'D', labelKey: 'D' },
      { value: 'A', labelKey: 'A' },
      { value: 'E', labelKey: 'E' },
      { value: 'B', labelKey: 'B' },
      { value: 'F#', labelKey: 'F#' },
      { value: 'Db', labelKey: 'Db' },
      { value: 'Ab', labelKey: 'Ab' },
      { value: 'Eb', labelKey: 'Eb' },
      { value: 'Bb', labelKey: 'Bb' },
      { value: 'F', labelKey: 'F' },
    ],
  },
};
