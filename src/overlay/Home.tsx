import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Grid,
  Card,
  CardThumbnail,
  CardThumbnailOverlay,
  CardHeader,
  Container,
} from '@la-jarre-a-son/ui';

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
    <Container size="xl" className="Home">
      <img className="Home-logo" src={logo} alt={t('overlay.midiJar')} />
      <h1>{t('overlay.midiJarOverlay')}</h1>
      <p>{t('overlay.description')}</p>
      <Grid size="md" gap="md">
        {settings.chordDisplay.map((module) => (
          <Card outlined elevation={1}>
            <CardThumbnail alt={t('home.chordDisplayPreview')} src={ThumbnaildChordDisplay}>
              <CardThumbnailOverlay as={NavLink} to={`/chords/${module.id}`} interactive />
            </CardThumbnail>
            <CardHeader left={<Icon name="music" />}>
              {t('nav.chordDisplayWithId', { moduleId: module.id })}
            </CardHeader>
          </Card>
        ))}
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.chordQuizPreview')} src={ThumbnaildChordQuiz}>
            <CardThumbnailOverlay as={NavLink} to="/quiz" interactive />
          </CardThumbnail>
          <CardHeader left={<Icon name="quiz" />}>{t('nav.chordQuiz')}</CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.circleOfFifthsPreview')} src={ThumbnaildCircleOfFifths}>
            <CardThumbnailOverlay as={NavLink} to="/circle-of-fifths" interactive />
          </CardThumbnail>
          <CardHeader left={<Icon name="circle-of-fifths" />}>{t('nav.circleOfFifths')}</CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.chordDictionaryPreview')} src={ThumbnaildChordDictionary}>
            <CardThumbnailOverlay as={NavLink} to="/chord-dictionary" interactive />
          </CardThumbnail>
          <CardHeader left={<Icon name="dictionary" />}>{t('nav.chordDictionary')}</CardHeader>
        </Card>
      </Grid>
    </Container>
  );
};

export default Home;
