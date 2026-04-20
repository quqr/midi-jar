# MIDI Jar i18n - Verification Checklist

## Infrastructure

- [ ] `i18next` and `react-i18next` are installed and listed in package.json dependencies
- [ ] `src/locales/i18n.ts` exists and correctly initializes i18next
- [ ] `src/locales/en.json` exists with all English translations
- [ ] `src/locales/zh-CN.json` exists with all Chinese translations
- [ ] `GeneralSettings` type includes `language: 'en' | 'zh-CN'` field
- [ ] Default settings include `language: 'en'`
- [ ] i18n is initialized in `src/renderer/App.tsx` before React renders
- [ ] i18n is initialized in `src/overlay/App.tsx` before React renders
- [ ] Settings JSON schema is regenerated after type changes

## Language Selector

- [ ] Language selector dropdown exists in General Settings page
- [ ] Language selector shows "English" and "简体中文" options
- [ ] Changing language immediately updates all UI text
- [ ] Language preference is persisted via electron-store
- [ ] Language preference survives app restart

## System Language Detection

- [ ] On first launch (no saved language), system locale is detected
- [ ] Chinese system locale (zh-CN, zh-Hans, zh-Hans-CN) defaults to zh-CN
- [ ] Other system locales default to en

## Renderer - Navigation & Layout

- [ ] Router breadcrumb titles are translated: Chord Display, Circle of Fifths, Chord Quiz, Chord Dictionary
- [ ] Dynamic title `Chord Display ({{moduleId}})` works with interpolation
- [ ] Layout modal titles translated: "MIDI Jar", "Update available"
- [ ] Update message with version interpolation works
- [ ] "Go to release page" button text translated
- [ ] TopBar aria-labels translated: Settings, Always on Top, Quit App
- [ ] Breadcrumb aria-labels translated
- [ ] Traffic light button aria-labels translated: Minimize, Maximize, Unmaximize, Close
- [ ] Latency monitor titles translated

## Renderer - Home Page

- [ ] All card headers translated: Chord Display, Chord Quiz, Circle of Fifths, Chord Dictionary, Routing, Debugger
- [ ] All preview alt texts translated
- [ ] All overlay/settings aria-labels translated
- [ ] Dynamic Chord Display card title with module ID works

## Renderer - Settings Navigation

- [ ] All sidebar nav labels translated: General, Routing, Music Notation, Chord Dictionary, Chord Display, Circle of 5th, Chord Quiz, Debugger, Licenses, About
- [ ] Settings breadcrumb title translated

## Renderer - General Settings

- [ ] Server status messages translated (running, stopped, errored)
- [ ] Server URL access text translated
- [ ] "Startup" fieldset label translated
- [ ] "Launch At Startup" label translated
- [ ] "Start Minimized" label translated
- [ ] "Overlay server" fieldset label translated
- [ ] "Enable HTTP & WS server" label translated
- [ ] "Server Port" label translated
- [ ] Language selector present and functional

## Renderer - Routing Settings

- [ ] "Refresh devices" button translated
- [ ] "Clear all" button translated
- [ ] "error" text in InputNode/OutputNode translated

## Renderer - Notation Settings

- [ ] "Key Signature" label translated
- [ ] "Accidentals (in C)" label translated
- [ ] "Staff Clef" label translated
- [ ] "Staff Transpose (in semitones)" label translated
- [ ] Transpose hint text translated
- [ ] Accidental options translated: "flat - ♭", "sharp - ♯"
- [ ] Clef options translated: "Bass 𝄢 + Treble 𝄞", "Bass 𝄢", "Treble 𝄞"
- [ ] Key signature labels translated (e.g., "C major / A minor")
- [ ] "Key" label in QuickChangeKeyToolbar translated

## Renderer - Chord Dictionary Settings

- [ ] "Browse" fieldset label translated
- [ ] "Interactive" label and hint translated
- [ ] "Detect" / "Play" toggle labels translated
- [ ] "Group chords" label translated
- [ ] "No Group", "By Quality", "By Interval" options and hints translated
- [ ] "Hide disabled chords" label translated
- [ ] "Filter chords in key" label and hint translated
- [ ] "Disabled chords" fieldset label translated
- [ ] "No disabled Chords" text translated
- [ ] "Preferred notation" fieldset label translated
- [ ] "Default notation" label and hint translated
- [ ] "No preferred aliases" text translated
- [ ] Notation option labels translated

## Renderer - Chord Display Settings

- [ ] All fieldset labels translated: "Chords", "Additional Info", "Keyboard", "Keyboard Skin", "Keyboard Colors"
- [ ] All form labels translated (~25 labels)
- [ ] All hint texts translated (~25 hints)
- [ ] "New module" modal title translated
- [ ] "Name" label translated
- [ ] "Cancel" / "Add" buttons translated
- [ ] "Reset to Defaults" / "Delete" buttons translated
- [ ] Validation errors translated: "Cannot be empty", "Already exists", "One or more fields contains errors"
- [ ] Skin options translated: "Classic", "Flat"
- [ ] Key name options translated: "None", "Only C", "Pitch Class", "Note"
- [ ] Key info options translated: "None", "Tonic Dot", "Chord Intervals", "Tonic Dot + Intervals"
- [ ] Key label options translated: "None", "Pitch Class", "Note", "Note in Chord", "Interval"
- [ ] Color labels translated: "Black Keys", "White Keys", "Played Keys", "Wrapped Keys", "Sustained Keys"

## Renderer - Circle of Fifths Settings

- [ ] All toggle labels translated (~12 settings)
- [ ] All hint texts translated (~12 hints)
- [ ] "Reset to Defaults" button translated
- [ ] Scale options translated: "Major", "Minor"
- [ ] Highlight sector options translated: "On Chord", "On Notes"

## Renderer - Chord Quiz Settings

- [ ] "Mode" label and hint translated
- [ ] "Difficulty" label and hint translated
- [ ] "Previous level +" label translated
- [ ] "Game Length" label and hint translated
- [ ] "Gamification" label and hint translated
- [ ] "Chord Notation" label and hint translated
- [ ] "Display Reaction" label and hint translated
- [ ] "Display Chord Name" label and hint translated
- [ ] "Display Intervals" label and hint translated
- [ ] "Reset to Defaults" button translated
- [ ] Mode options translated: "Random", "Random in Key"
- [ ] Difficulty levels translated: "Very Easy", "Easy", "Medium", "Hard", "Very Hard", "All chords"
- [ ] Notation options translated

## Renderer - Debugger

- [ ] "MIDI Clock" label translated
- [ ] "Clear messages" button translated
- [ ] MIDI command/CC names remain in English (protocol standard terms)

## Renderer - About

- [ ] App name and version display correctly
- [ ] Author credit text translated
- [ ] Windows note about LoopMIDI translated
- [ ] "Download LoopMIDI" button translated
- [ ] "Features" heading and list translated
- [ ] "Report a bug" / "Request a feature" buttons translated
- [ ] "Changelog" heading translated
- [ ] "Special mentions" heading translated
- [ ] Project descriptions translated
- [ ] Credits table headers translated: "Name", "Description", "Links"
- [ ] Credit link texts translated: "Github", "Website"

## Renderer - Chord Quiz Module

- [ ] "Game will start" text translated
- [ ] "BEST" label translated
- [ ] "GAME {{n}}" label translated
- [ ] All reaction strings translated (different, subset, equal, superset categories)

## Renderer - Chord Dictionary Module

- [ ] Toolbar: "In Key" suffix, "Group" / "Filter" headers, "Hide disabled chords", "Only chords in key", "Detect", "Play" translated
- [ ] Search: "Search Chord" placeholder, "Type chord..." placeholder, "matches", "previous chords", "No chords found", "No chords in history" translated
- [ ] Detail: "Intervals", "Notation", "Aliases", "Other interpretations", "Inversions", "Simplified", "Extended" headings translated
- [ ] Detail: Tooltips translated ("Disable/enable chord", "Set/Unset as preferred")
- [ ] Detail: "see also" text translated
- [ ] Detail: "inversion on {{interval}}" text translated
- [ ] Empty detail: "Cannot find a chord named {{chordName}}" and help text translated
- [ ] Group names translated: "No Group", "By Quality", "By Intervals"
- [ ] Quality group names translated: "Major", "Minor", "Dominant", "Minor/Major", "Suspended / No 3rd", "Diminished", "Augmented"
- [ ] Interval group names translated: "Minor 3rd", "Major 3rd", "No 3rd / Suspended", "Perfect 5th", "Diminished 5th", "Augmented 5th", "No 5th", "Minor 7th", "Major 7th", "No 7th"

## Renderer - Circle of Fifths Component

- [ ] Degree names translated: Tonic, Supertonic, Mediant, Subdominant, Dominant, Submediant, Leading Tone
- [ ] Mode names translated: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian
- [ ] Scale mode labels translated: "MAJOR SCALE - IONIAN MODE", "MINOR SCALE - AEOLIAN MODE"
- [ ] Degree display format works with translated names

## Renderer - Other Components

- [ ] Notation component: "Key: {{tonic}}" text translated
- [ ] InputNote: "Learn" button translated
- [ ] InputNumber: "decrement" / "increment" aria-labels translated

## Main Process

- [ ] Electron menu labels translated (all ~20 strings)
- [ ] Tray menu labels translated: "Open App", "Quit"
- [ ] Tray tooltip translated: "MIDI Jar"
- [ ] Menu rebuilds when language changes via IPC

## Overlay

- [ ] "MIDI Jar" alt text and heading translated
- [ ] "MIDI Jar Overlay" heading translated
- [ ] Description text translated
- [ ] Module card headers and alt texts translated
- [ ] Overlay language syncs with main app settings

## Chinese Translation Quality

- [ ] Music theory terms use standard Chinese terminology (和弦, 音程, 调式, etc.)
- [ ] Difficulty levels are natural and clear (非常简单, 简单, 中等, 困难, 非常困难)
- [ ] Quiz reactions are natural and fun in Chinese
- [ ] Settings labels and hints are clear and accurate
- [ ] No untranslated English strings remain in zh-CN mode
- [ ] No layout/overflow issues with Chinese text (typically longer than English)

## Build & Code Quality

- [ ] `npm run lint` passes with no errors
- [ ] `npm run types` passes with no type errors
- [ ] `npm run build` completes successfully
- [ ] No console warnings about missing translation keys
- [ ] TypeScript types for i18n are correct (no `any` types introduced)
