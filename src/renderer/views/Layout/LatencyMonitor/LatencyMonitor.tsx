import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import useMidiLatency from 'renderer/hooks/useMidiLatency';

import styles from './LatencyMonitor.module.scss';

const cx = classnames.bind(styles);

const Routing: React.FC = () => {
  const [current, highest, resetHighest] = useMidiLatency();
  const { t } = useTranslation();

  return (
    <div className={cx('base')}>
      <div className={cx('current')} title={t('layout.averageRoutingLatency')}>{`${current.toFixed(
        3
      )}ms`}</div>
      <button
        type="button"
        className={cx('highest')}
        onClick={resetHighest}
        title={t('layout.highestRoutingLatency')}
      >
        {`${highest.toFixed(3)}ms`}
      </button>
    </div>
  );
};

export default Routing;
