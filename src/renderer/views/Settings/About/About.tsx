import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Badge, Box, Button, Container, Link, Stack } from '@la-jarre-a-son/ui';

import logo from 'renderer/assets/logo.svg';
import { Icon } from 'renderer/components';

import Credits from './Credits';
import { CREDIT_ITEMS } from './constants';

import styles from './About.module.scss';
import Changelog from './Changelog';

const cx = classnames.bind(styles);

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className={cx('base')} size="xl">
      <div className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="" />
        <h1 className={cx('appname')}>
          MIDI Jar <Badge className={cx('version')}>{process.env.APP_VERSION}</Badge>
        </h1>
        <div className={cx('author')}>
          {t('settings.aboutSettings.byAuthor')}
          <Link href="https://ljas.fr" target="_blank" rel="noreferrer">
            {t('settings.aboutSettings.laJarreASon')}
          </Link>
        </div>
      </div>
      {window.os.isWindows ? (
        <Box
          as={Stack}
          elevation={1}
          pad="md"
          className={cx('loopMidi')}
          outlined
          gap="md"
          direction="vertical"
        >
          <p>
            {t('settings.aboutSettings.windowsNote')}
            <Link href="https://www.tobias-erichsen.de/software/loopmidi.html" target="_blank">
              {t('settings.aboutSettings.loopMidi')}
            </Link>
            {t('settings.aboutSettings.loopMidiNote')}
          </p>
          <Stack justify="end">
            <Button
              as="a"
              target="_blank"
              rel="noreferrer"
              href="https://www.tobias-erichsen.de/software/loopmidi.html"
            >
              <Icon name="midi" />
              {t('settings.aboutSettings.downloadLoopMidi')}
            </Button>
          </Stack>
        </Box>
      ) : null}
      <h2 className={cx('title')}>{t('settings.aboutSettings.features')}</h2>
      <div className={cx('description')}>
        <p>{t('settings.aboutSettings.featuresDescription')}</p>
        <ul>
          <li>{t('settings.aboutSettings.featureRoute')}</li>
          <li>{t('settings.aboutSettings.featureDisplay')}</li>
          <li>{t('settings.aboutSettings.featureIntegrate')}</li>
          <li>{t('settings.aboutSettings.featureLearn')}</li>
        </ul>
        <p>
          {t('settings.aboutSettings.planToAdd')}
          <Button
            size="sm"
            intent="neutral"
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/la-jarre-a-son/midi-jar/issues/new?labels=bug&template=1-Bug_report.md"
          >
            <Icon name="github" />
            {t('settings.aboutSettings.reportBug')}
          </Button>
          {t('settings.aboutSettings.or')}
          <Button
            size="sm"
            intent="neutral"
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/la-jarre-a-son/midi-jar/issues/new?labels=enhancement&template=2-Feature_request.md"
          >
            <Icon name="github" />
            {t('settings.aboutSettings.requestFeature')}
          </Button>
        </p>
      </div>
      <h2 className={cx('title')}>{t('settings.aboutSettings.changelog')}</h2>
      <Changelog />
      <h2 className={cx('title')}>{t('settings.aboutSettings.specialMentions')}</h2>
      <div className={cx('description')}>
        <p>{t('settings.aboutSettings.specialMentionsDescription')}</p>
      </div>
      <Credits items={CREDIT_ITEMS} />
    </Container>
  );
};

export default About;
