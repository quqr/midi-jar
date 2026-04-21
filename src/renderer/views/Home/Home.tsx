import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { ServerState } from 'main/types';

import { Icon, NavButton } from 'renderer/components';

import ThumbnaildChordDisplay from 'renderer/assets/thumbnails/chord-display.jpg';
import ThumbnaildChordQuiz from 'renderer/assets/thumbnails/chord-quiz.jpg';
import ThumbnaildChordDictionary from 'renderer/assets/thumbnails/chord-dictionary.jpg';
import ThumbnaildCircleOfFifths from 'renderer/assets/thumbnails/circle-of-fifths.jpg';
import ThumbnailRouting from 'renderer/assets/thumbnails/routing.jpg';
import ThumbnailDebugger from 'renderer/assets/thumbnails/debugger.jpg';
import { useServerState } from 'renderer/contexts/ServerState';
import { useSettings } from 'renderer/contexts/Settings';
import styles from './Home.module.scss';

const getOverlayUrl = (state: ServerState, path: string) =>
  `http://${state.addresses[0]}:${state.port}${path}`;

const cx = classnames.bind(styles);

const Home: React.FC = () => {
  const { settings } = useSettings();
  const { state } = useServerState();
  const { t } = useTranslation();
  const overlayEnabled = state.started && !!state.addresses.length;

  return (
    <div className={classnames('container mx-auto max-w-7xl', styles.base)}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {settings.chordDisplay.map((module) => (
          <div
            key={`chord-display/${module.id}`}
            className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden"
          >
            <figure className="relative aspect-[640/429]">
              <img
                src={ThumbnaildChordDisplay}
                alt={t('home.chordDisplayPreview')}
                className="w-full h-full object-cover"
              />
              <NavLink to={`/chords/${module.id}`} className="absolute inset-0" />
              {overlayEnabled && (
                <div className="absolute top-2 left-2 z-10">
                  <a
                    href={getOverlayUrl(state, `/chords/${module.id}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-ghost btn-sm"
                    aria-label={t('common.overlay')}
                  >
                    <Icon name="overlay" />
                  </a>
                </div>
              )}
            </figure>
            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="piano" />
                  <h3 className="card-title text-lg font-semibold">
                    {t('nav.chordDisplayWithId', { moduleId: module.id })}
                  </h3>
                </div>
                <NavButton
                  aria-label={t('common.settings')}
                  className="btn btn-ghost btn-sm hover:bg-base-200"
                  to={`/settings/chords/${module.id}`}
                >
                  <Icon name="settings" />
                </NavButton>
              </div>
            </div>
          </div>
        ))}
        <div className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden">
          <figure className="relative aspect-[640/429]">
            <img
              src={ThumbnaildChordQuiz}
              alt={t('home.chordQuizPreview')}
              className="w-full h-full object-cover"
            />
            <NavLink to="/quiz" className="absolute inset-0" />
            {overlayEnabled && (
              <div className="absolute top-2 left-2 z-10">
                <a
                  href={getOverlayUrl(state, '/quiz')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-ghost btn-sm"
                  aria-label={t('common.overlay')}
                >
                  <Icon name="overlay" />
                </a>
              </div>
            )}
          </figure>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="quiz" />
                <h3 className="card-title text-lg font-semibold">{t('nav.chordQuiz')}</h3>
              </div>
              <NavButton
                aria-label={t('common.settings')}
                className="btn btn-ghost btn-sm hover:bg-base-200"
                to="/settings/quiz"
              >
                <Icon name="settings" />
              </NavButton>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden">
          <figure className="relative aspect-[640/429]">
            <img
              src={ThumbnaildCircleOfFifths}
              alt={t('home.circleOfFifthsPreview')}
              className="w-full h-full object-cover"
            />
            <NavLink to="/circle-of-fifths" className="absolute inset-0" />
            {overlayEnabled && (
              <div className="absolute top-2 left-2 z-10">
                <a
                  href={getOverlayUrl(state, '/circle-of-fifths')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-ghost btn-sm"
                  aria-label={t('common.overlay')}
                >
                  <Icon name="overlay" />
                </a>
              </div>
            )}
          </figure>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="circle-of-fifths" />
                <h3 className="card-title text-lg font-semibold">{t('nav.circleOfFifths')}</h3>
              </div>
              <NavButton
                aria-label={t('common.settings')}
                className="btn btn-ghost btn-sm hover:bg-base-200"
                to="/settings/circle-of-fifths"
              >
                <Icon name="settings" />
              </NavButton>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden">
          <figure className="relative aspect-[640/429]">
            <img
              src={ThumbnaildChordDictionary}
              alt={t('home.chordDictionaryPreview')}
              className="w-full h-full object-cover"
            />
            <NavLink to="/chord-dictionary" className="absolute inset-0" />
            {overlayEnabled && (
              <div className="absolute top-2 left-2 z-10">
                <a
                  href={getOverlayUrl(state, '/chord-dictionary')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-ghost btn-sm"
                  aria-label={t('common.overlay')}
                >
                  <Icon name="overlay" />
                </a>
              </div>
            )}
          </figure>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="dictionary" />
                <h3 className="card-title text-lg font-semibold">{t('nav.chordDictionary')}</h3>
              </div>
              <NavButton
                aria-label={t('common.settings')}
                className="btn btn-ghost btn-sm hover:bg-base-200"
                to="/settings/chord-dictionary"
              >
                <Icon name="settings" />
              </NavButton>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden">
          <figure className="relative aspect-[640/429]">
            <img
              src={ThumbnailRouting}
              alt={t('home.settingsPreview')}
              className="w-full h-full object-cover"
            />
            <NavLink to="/settings/routing" className="absolute inset-0" />
          </figure>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="routing" />
                <h3 className="card-title text-lg font-semibold">{t('nav.routing')}</h3>
              </div>
              <NavButton
                aria-label={t('common.settings')}
                className="btn btn-ghost btn-sm hover:bg-base-200"
                to="/settings/routing"
              >
                <Icon name="settings" />
              </NavButton>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-xl border border-base-300 overflow-hidden">
          <figure className="relative aspect-[640/429]">
            <img
              src={ThumbnailDebugger}
              alt={t('home.debuggerPreview')}
              className="w-full h-full object-cover"
            />
            <NavLink to="/settings/debug" className="absolute inset-0" />
          </figure>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="bug" />
                <h3 className="card-title text-lg font-semibold">{t('nav.debugger')}</h3>
              </div>
              <NavButton
                aria-label={t('common.settings')}
                className="btn btn-ghost btn-sm hover:bg-base-200"
                to="/settings/debug"
              >
                <Icon name="settings" />
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
