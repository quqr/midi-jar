import React from 'react';
import { Outlet } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { NavTab, Icon } from 'renderer/components';

const SettingsLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex overflow-hidden">
      {/* Fixed Sidebar */}
      <aside className="w-[72px] min-w-[72px] md:w-[280px] md:min-w-[280px] bg-base-100 border-r border-base-300 flex flex-col flex-shrink-0">
        <nav className="flex flex-col h-full" aria-label={t('settings.navigation')}>
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/general"
            >
              <Icon name="window" />
              <span className="flex-1 hidden md:inline">{t('settings.general')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/routing"
            >
              <Icon name="routing" />
              <span className="flex-1 hidden md:inline">{t('settings.routing')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/notation"
            >
              <Icon name="music" />
              <span className="flex-1 hidden md:inline">{t('settings.musicNotation')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/chord-dictionary"
            >
              <Icon name="dictionary" />
              <span className="flex-1 hidden md:inline">{t('settings.chordDictionary')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/chords"
            >
              <Icon name="piano" />
              <span className="flex-1 hidden md:inline">{t('settings.chordDisplay')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/circle-of-fifths"
            >
              <Icon name="circle-of-fifths" />
              <span className="flex-1 hidden md:inline">{t('settings.circleOf5th')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/quiz"
            >
              <Icon name="quiz" />
              <span className="flex-1 hidden md:inline">{t('settings.chordQuiz')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/debug"
            >
              <Icon name="bug" />
              <span className="flex-1 hidden md:inline">{t('settings.debugger')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/licenses"
            >
              <Icon name="copyright" />
              <span className="flex-1 hidden md:inline">{t('settings.licenses')}</span>
            </NavTab>
            <NavTab
              className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-sm font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content justify-center md:justify-start [&.active]:bg-primary [&.active]:text-white [&.active]:font-semibold [&.active]:shadow-sm"
              to="/settings/about"
            >
              <Icon name="info" />
              <span className="flex-1 hidden md:inline">{t('settings.about')}</span>
            </NavTab>
          </div>
          {/* Version Number - Fixed at Bottom */}
          <div className="px-4 py-3 border-t border-base-300 text-xs text-base-content/50 text-center flex-shrink-0 mt-auto">
            <span>v{process.env.APP_VERSION}</span>
          </div>
        </nav>
      </aside>
      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SettingsLayout;
