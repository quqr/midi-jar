export const fields = {
  scale: {
    choices: [
      { value: 'major', labelKey: 'settings.circleOfFifthsSettings.scaleOptions.major' },
      { value: 'minor', labelKey: 'settings.circleOfFifthsSettings.scaleOptions.minor' },
    ],
  },
  highlightSector: {
    choices: [
      {
        value: 'chord',
        labelKey: 'settings.circleOfFifthsSettings.highlightSectorOptions.onChord',
      },
      {
        value: 'notes',
        labelKey: 'settings.circleOfFifthsSettings.highlightSectorOptions.onNotes',
      },
    ],
  },
};
