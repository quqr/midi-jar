import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from 'renderer/assets/logo.svg';
import { Icon } from 'renderer/components';
import ThumbnaildChordDisplay from 'renderer/assets/thumbnails/chord-display.jpg';
import ThumbnaildChordQuiz from 'renderer/assets/thumbnails/chord-quiz.jpg';
import ThumbnaildCircleOfFifths from 'renderer/assets/thumbnails/circle-of-fifths.jpg';
import ThumbnaildChordDictionary from 'renderer/assets/thumbnails/chord-dictionary.jpg';
import { useSettings } from 'renderer/contexts/Settings';

const Home: React.FC = () => {
  const { settings } = useSettings();
  const { t } = useTranslation();

  return (
    <div className="container container-xl mx-auto Home">
      <img className="Home-logo" src={logo} alt={t('overlay.midiJar')} />
      <h1>{t('overlay.midiJarOverlay')}</h1>
      <p>{t('overlay.description')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {settings.chordDisplay.map((module) => (
          <div key={module.id} className="card bg-base-100 shadow-sm border border-base-300">
            <figure className="relative">
              <img src={ThumbnaildChordDisplay} alt={t('home.chordDisplayPreview')} />
              <div className="absolute inset-0">
                <NavLink to={`/chords/${module.id}`} className="block w-full h-full" />
              </div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">
                <Icon name="music" />
                {t('nav.chordDisplayWithId', { moduleId: module.id })}
              </h2>
            </div>
          </div>
        ))}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <figure className="relative">
            <img src={ThumbnaildChordQuiz} alt={t('home.chordQuizPreview')} />
            <div className="absolute inset-0">
              <NavLink to="/quiz" className="block w-full h-full" />
            </div>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
              <Icon name="quiz" />
              {t('nav.chordQuiz')}
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <figure className="relative">
            <img src={ThumbnaildCircleOfFifths} alt={t('home.circleOfFifthsPreview')} />
            <div className="absolute inset-0">
              <NavLink to="/circle-of-fifths" className="block w-full h-full" />
            </div>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
              <Icon name="circle-of-fifths" />
              {t('nav.circleOfFifths')}
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <figure className="relative">
            <img src={ThumbnaildChordDictionary} alt={t('home.chordDictionaryPreview')} />
            <div className="absolute inset-0">
              <NavLink to="/chord-dictionary" className="block w-full h-full" />
            </div>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
              <Icon name="dictionary" />
              {t('nav.chordDictionary')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
