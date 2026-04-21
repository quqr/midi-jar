/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useMidiRouting } from 'renderer/contexts/MidiRouting';
import { Icon } from 'renderer/components';

import Graph from './Graph';

import styles from './Routing.module.scss';

const cx = classnames.bind(styles);

const Routing: React.FC = () => {
  const { inputs, outputs, wires, refreshDevices, addRoute, deleteRoute, clearRoutes } =
    useMidiRouting();
  const { t } = useTranslation();

  return (
    <div className={cx('base')}>
      <div className={cx('container')}>
        <Graph
          inputs={inputs}
          outputs={outputs}
          wires={wires}
          onAddRoute={addRoute}
          onDeleteRoute={deleteRoute}
        />
      </div>
      <div className={cx('toolbar')}>
        <button type="button" className="btn btn-neutral btn-sm" onClick={refreshDevices}>
          <Icon name="refresh" />
          {t('settings.routingSettings.refreshDevices')}
        </button>
        <div className={cx('divider')} />
        <button type="button" className="btn btn-error btn-sm" onClick={clearRoutes}>
          <Icon name="trash" />
          {t('settings.routingSettings.clearAll')}
        </button>
      </div>
    </div>
  );
};

export default Routing;
