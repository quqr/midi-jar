# MIDI Jar i18n - Task Breakdown

## Phase 1: Infrastructure Setup

### Task 1.1: Install i18n dependencies
- Install `i18next` and `react-i18next` packages
- Verify installation in package.json

### Task 1.2: Create i18n configuration
- Create `src/locales/i18n.ts` with i18next initialization
- Configure default language, fallback language, interpolation
- Import JSON translation resources
- Set up language detection from electron-store settings

### Task 1.3: Create English translation file (en.json)
- Create `src/locales/en.json` with complete English translations
- Organize by module: common, nav, home, chordDisplay, chordQuiz, chordDictionary, circleOfFifths, settings (general, routing, notation, chordDictionary, chordDisplay, circleOfFifths, chordQuiz, debugger, about, licenses), layout, overlay
- Extract all hardcoded strings from the codebase into the JSON file

### Task 1.4: Create Chinese translation file (zh-CN.json)
- Create `src/locales/zh-CN.json` with complete Simplified Chinese translations
- Translate all strings with accurate music theory terminology
- Ensure consistency with standard Chinese music terminology

### Task 1.5: Add language setting to types and defaults
- Add `language: 'en' | 'zh-CN'` to `GeneralSettings` type in `src/main/types/Settings.ts`
- Add `language: 'en'` to defaults in `src/main/store/defaults.ts`
- Regenerate settings JSON schema

### Task 1.6: Initialize i18n in renderer App.tsx
- Import i18n configuration in `src/renderer/App.tsx`
- Ensure i18n initializes before React renders

### Task 1.7: Initialize i18n in overlay App.tsx
- Import i18n configuration in `src/overlay/App.tsx`
- Ensure i18n initializes before React renders

## Phase 2: Core Navigation & Layout

### Task 2.1: Refactor router.tsx
- Replace hardcoded strings in route handles: `'Chord Display'`, `'Circle of Fifths'`, `'Chord Quiz'`, `'Chord Dictionary'`
- Replace aria-labels: `'Chord Display Settings'`, `'Circle of fifths Settings'`, `'Chord Quiz Settings'`
- Handle dynamic title with interpolation: `Chord Display ({{moduleId}})`

### Task 2.2: Refactor Layout components
- `Layout.tsx`: Replace `'MIDI Jar'`, `'Update available'`, update message, `'Go to release page'`
- `TopBar.tsx`: Replace `'Settings'`, `'Always on Top'`, `'Quit App'` aria-labels
- `AppBreadcrumb.tsx`: Replace `'Settings'` aria-label
- `TrafficLightButtons.tsx`: Replace `'Minimize'`, `'Unmaximize'`, `'Maximize'`, `'Close'` aria-labels
- `LatencyMonitor.tsx`: Replace `'average routing latency'`, `'highest routing latency'` titles

### Task 2.3: Refactor Home.tsx
- Replace all card headers: `'Chord Display'`, `'Chord Quiz'`, `'Circle of Fifths'`, `'Chord Dictionary'`, `'Routing'`, `'Debugger'`
- Replace alt texts and aria-labels
- Handle dynamic `Chord Display ({{moduleId}})` title

### Task 2.4: Refactor Settings navigation
- `SettingsLayout.tsx`: Replace all nav tab labels: `'General'`, `'Routing'`, `'Music Notation'`, `'Chord Dictionary'`, `'Chord Display'`, `'Circle of 5th'`, `'Chord Quiz'`, `'Debugger'`, `'Licenses'`, `'About'`
- `Settings/routes.tsx`: Replace `'Settings'` breadcrumb title

## Phase 3: Settings Pages

### Task 3.1: Refactor GeneralSettings.tsx
- Replace server status messages
- Replace `'Startup'`, `'Launch At Startup'`, `'Start Minimized'`
- Replace `'Overlay server'`, `'Enable HTTP & WS server'`, `'Server Port'`
- Add language selector UI component

### Task 3.2: Refactor Routing.tsx
- Replace `'Refresh devices'`, `'Clear all'`
- Replace `'error'` in InputNode.tsx and OutputNode.tsx

### Task 3.3: Refactor NotationSettings.tsx
- Replace `'Key Signature'`, `'Accidentals (in C)'`, `'Staff Clef'`, `'Staff Transpose (in semitones)'`
- Replace hint text
- Refactor `constants.ts`: key signature labels, accidental options, clef options
- Refactor `QuickChangeKeyToolbar.tsx`: `'Key'` label

### Task 3.4: Refactor ChordDictionarySettings.tsx
- Replace all labels and hints: `'Browse'`, `'Interactive'`, `'Group chords'`, etc.
- Replace `'No Group'`, `'By Quality'`, `'By Interval'` and their hints
- Replace `'Disabled chords'`, `'Preferred notation'` sections
- Refactor `constants.ts`: notation option labels

### Task 3.5: Refactor ChordDisplaySettings
- `ChordDisplayModuleSettings.tsx`: Replace all fieldset labels, form labels, and hints (~50 strings)
- `ChordDisplayAddModal.tsx`: Replace `'New module'`, `'Name'`, `'Cancel'`, `'Add'`
- `ChordDisplayList.tsx`: Replace aria-labels
- `utils.ts`: Replace validation errors, option labels (skin, key names, key info, key label options)

### Task 3.6: Refactor CircleOfFifthsSettings.tsx
- Replace all toggle labels and hints (~15 settings with labels + hints)
- Replace `'Reset to Defaults'`
- Refactor `constants.ts`: `'Major'`, `'Minor'`, `'On Chord'`, `'On Notes'`

### Task 3.7: Refactor ChordQuizSettings.tsx
- Replace all labels and hints: `'Mode'`, `'Difficulty'`, `'Game Length'`, `'Gamification'`, etc.
- Replace `'Previous level +'`, `'Reset to Defaults'`
- Refactor `constants.ts`: mode options, difficulty levels, notation options

### Task 3.8: Refactor Debugger.tsx
- Replace `'MIDI Clock'`, `'Clear messages'`
- Note: MIDI command/CC names in `constants.ts` are protocol standard terms - keep as-is (not translated)

### Task 3.9: Refactor About.tsx
- Replace all text: app name, credits, Windows note, features list, bug/feature links
- Replace `'Changelog'`, `'Special mentions'` headings
- Refactor `constants.ts`: project descriptions
- Refactor `Credits.tsx`: table headers `'Name'`, `'Description'`, `'Links'`
- Refactor `CreditItem.tsx`: `'Github'`, `'Website'` link texts

### Task 3.10: Refactor Licenses.tsx
- Replace `'Github'` button text

## Phase 4: Feature Modules

### Task 4.1: Refactor ChordDisplay components
- Main ChordDisplay view (if any UI strings)
- ChordIntervals component
- ChordName/ChordNameLink components
- Notation component: `'Key: {{tonic}}'`
- InputNote component: `'Learn'` button
- InputNumber component: `'decrement'`, `'increment'` aria-labels

### Task 4.2: Refactor ChordQuiz components
- `ChordQuiz.tsx`: Replace `'Game will start'`
- `GameList.tsx`: Replace `'BEST'`, `'GAME {{n}}'`
- `Reaction/utils.ts`: Replace all reaction strings (different, subset, equal, superset categories)

### Task 4.3: Refactor ChordDictionary components
- `ChordDictionaryToolbar.tsx`: Replace `'In Key'`, `'Group'`, `'Filter'`, `'Hide disabled chords'`, `'Only chords in key'`, `'Detect'`, `'Play'`, aria-labels
- `ChordDictionaryChordMenu.tsx`: Replace aria-label
- `ChordDictionaryChromaMenu.tsx`: Replace aria-label
- `ChordSearch.tsx`: Replace `'Search Chord'`, `'Type chord...'`, `'matches'`, `'previous chords'`, `'No chords found'`, `'No chords in history'`
- `ChordDetail.tsx`: Replace `'Intervals'`, `'Notation'`, `'Aliases'`, `'Other interpretations'`, `'Inversions'`, `'Simplified'`, `'Extended'`, tooltips, `'see also'`
- `EmptyChordDetail.tsx`: Replace `'Cannot find a chord named {{chordName}}'`, help text
- `utils.ts`: Replace group names (`'No Group'`, `'By Quality'`, `'By Intervals'`, quality/interval group names)

### Task 4.4: Refactor CircleOfFifths components
- `CircleFifths/utils.ts`: Replace degree names, mode names
- `CircleFifths/Sections/Degrees.tsx`: Replace `'MINOR SCALE - AEOLIAN MODE'`, `'MAJOR SCALE - IONIAN MODE'`, degree display format

### Task 4.5: Refactor chords-data.ts
- Replace all chord full names with translation keys
- This file contains ~100+ chord names that need to be translatable

## Phase 5: Main Process

### Task 5.1: Refactor menu.ts
- Initialize i18next in main process
- Replace all menu labels: `'MIDI Jar'`, `'About MIDI Jar'`, `'Preferences'`, `'General'`, `'Routing'`, `'Debugger'`, `'Server'`, `'Services'`, `'Hide MIDI Jar'`, `'Hide Others'`, `'Show All'`, `'Close'`, `'Quit'`, `'Window'`, `'Minimize'`, `'Toggle Full Screen'`, `'Toggle Always On Top'`, `'Bring All to Front'`, `'Help'`, `'Credits'`, `'Licenses'`, `'Report Bug'`

### Task 5.2: Refactor main.ts
- Replace tray menu labels: `'Open App'`, `'Quit'`
- Replace tray tooltip: `'MIDI Jar'`

### Task 5.3: IPC language sync
- Add IPC handler to sync language changes between renderer and main process
- Rebuild menu when language changes

## Phase 6: Overlay

### Task 6.1: Refactor overlay/Home.tsx
- Replace `'MIDI Jar'`, `'MIDI Jar Overlay'`, description text
- Replace module card headers and alt texts

## Phase 7: Testing & Verification

### Task 7.1: Test English locale
- Verify all English strings display correctly
- Verify no missing translations
- Verify all interpolation works correctly

### Task 7.2: Test Chinese locale
- Verify all Chinese strings display correctly
- Verify music theory terminology is accurate
- Verify language switching works
- Verify settings persistence

### Task 7.3: Test language switching
- Verify language can be changed in Settings
- Verify language persists across app restarts
- Verify system language detection on first launch
- Verify overlay language syncs with main app

### Task 7.4: Build verification
- Run `npm run lint` and fix any issues
- Run `npm run types` and fix any type errors
- Run `npm run build` and verify successful build
