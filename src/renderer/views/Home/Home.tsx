import React from 'react';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import {
  Button,
  Grid,
  Card,
  CardThumbnail,
  CardThumbnailOverlay,
  CardThumbnailItem,
  CardHeader,
  Container,
} from '@la-jarre-a-son/ui';
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
    <Container size="xl" className={cx('base')}>
      <Grid size="md" gap="md">
        {settings.chordDisplay.map((module) => (
          <Card key={`chord-display/${module.id}`} outlined elevation={1}>
            <CardThumbnail alt={t('home.chordDisplayPreview')} src={ThumbnaildChordDisplay}>
              <CardThumbnailOverlay as={NavLink} to={`/chords/${module.id}`} interactive />
              {overlayEnabled && (
                <CardThumbnailItem position="top-left">
                  <Button
                    as="a"
                    href={getOverlayUrl(state, `/chords/${module.id}`)}
                    target="_blank"
                    aria-label={t('common.overlay')}
                    icon
                    intent="primary"
                    variant="ghost"
                    hoverIntent
                  >
                    <Icon name="overlay" />
                  </Button>
                </CardThumbnailItem>
              )}
            </CardThumbnail>
            <CardHeader
              left={<Icon name="piano" />}
              right={
                <NavButton
                  aria-label={t('common.settings')}
                  icon
                  variant="ghost"
                  intent="neutral"
                  to={`/settings/chords/${module.id}`}
                >
                  <Icon name="settings" />
                </NavButton>
              }
            >
              {t('nav.chordDisplayWithId', { moduleId: module.id })}
            </CardHeader>
          </Card>
        ))}
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.chordQuizPreview')} src={ThumbnaildChordQuiz}>
            <CardThumbnailOverlay as={NavLink} to="/quiz" interactive />
            {overlayEnabled && (
              <CardThumbnailItem position="top-left">
                <Button
                  as="a"
                  href={getOverlayUrl(state, '/quiz')}
                  target="_blank"
                  aria-label={t('common.overlay')}
                  icon
                  intent="primary"
                  variant="ghost"
                  hoverIntent
                >
                  <Icon name="overlay" />
                </Button>
              </CardThumbnailItem>
            )}
          </CardThumbnail>
          <CardHeader
            left={<Icon name="quiz" />}
            right={
              <NavButton
                aria-label={t('common.settings')}
                icon
                variant="ghost"
                intent="neutral"
                to="/settings/quiz"
              >
                <Icon name="settings" />
              </NavButton>
            }
          >
            {t('nav.chordQuiz')}
          </CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.circleOfFifthsPreview')} src={ThumbnaildCircleOfFifths}>
            <CardThumbnailOverlay as={NavLink} to="/circle-of-fifths" interactive />
            {overlayEnabled && (
              <CardThumbnailItem position="top-left">
                <Button
                  as="a"
                  href={getOverlayUrl(state, '/circle-of-fifths')}
                  target="_blank"
                  aria-label={t('common.overlay')}
                  icon
                  intent="primary"
                  variant="ghost"
                  hoverIntent
                >
                  <Icon name="overlay" />
                </Button>
              </CardThumbnailItem>
            )}
          </CardThumbnail>
          <CardHeader
            left={<Icon name="circle-of-fifths" />}
            right={
              <NavButton
                aria-label={t('common.settings')}
                icon
                variant="ghost"
                intent="neutral"
                to="/settings/circle-of-fifths"
              >
                <Icon name="settings" />
              </NavButton>
            }
          >
            {t('nav.circleOfFifths')}
          </CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.chordDictionaryPreview')} src={ThumbnaildChordDictionary}>
            <CardThumbnailOverlay as={NavLink} to="/chord-dictionary" interactive />
            {overlayEnabled && (
              <CardThumbnailItem position="top-left">
                <Button
                  as="a"
                  href={getOverlayUrl(state, '/chord-dictionary')}
                  target="_blank"
                  aria-label={t('common.overlay')}
                  icon
                  intent="primary"
                  variant="ghost"
                  hoverIntent
                >
                  <Icon name="overlay" />
                </Button>
              </CardThumbnailItem>
            )}
          </CardThumbnail>
          <CardHeader
            left={<Icon name="dictionary" />}
            right={
              <NavButton
                aria-label={t('common.settings')}
                icon
                variant="ghost"
                intent="neutral"
                to="/settings/chord-dictionary"
              >
                <Icon name="settings" />
              </NavButton>
            }
          >
            {t('nav.chordDictionary')}
          </CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.settingsPreview')} src={ThumbnailRouting}>
            <CardThumbnailOverlay as={NavLink} to="/settings/routing" interactive />
          </CardThumbnail>
          <CardHeader left={<Icon name="routing" />}>{t('nav.routing')}</CardHeader>
        </Card>
        <Card outlined elevation={1}>
          <CardThumbnail alt={t('home.debuggerPreview')} src={ThumbnailDebugger}>
            <CardThumbnailOverlay as={NavLink} to="/settings/debug" interactive />
          </CardThumbnail>
          <CardHeader left={<Icon name="bug" />}>{t('nav.debugger')}</CardHeader>
        </Card>
      </Grid>
    </Container>
  );
};

export default Home;
