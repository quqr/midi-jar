import { RouterProvider } from 'react-router-dom';

import '../locales/i18n';

import SettingsManagerProvider from './contexts/SettingsManager';
import ServerStateProvider from './contexts/ServerState';
import MidiRoutingProvider from './contexts/MidiRouting';
import WindowStateProvider from './contexts/WindowState';
import SettingsProvider from './contexts/Settings';

import router from './router';

import './tailwind.css';
import './App.scss';
import ChordDictionaryProvider from './contexts/ChordDictionary';

const App: React.FC = () => (
  <div data-theme="dark">
    <SettingsManagerProvider source="internal">
      <ServerStateProvider>
        <MidiRoutingProvider>
          <WindowStateProvider>
            <SettingsProvider>
              <ChordDictionaryProvider>
                <RouterProvider router={router} />
              </ChordDictionaryProvider>
            </SettingsProvider>
          </WindowStateProvider>
        </MidiRoutingProvider>
      </ServerStateProvider>
    </SettingsManagerProvider>
  </div>
);

export default App;
