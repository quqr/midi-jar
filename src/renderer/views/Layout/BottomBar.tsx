import React from 'react';
import classnames from 'classnames';

import styles from './Layout.module.scss';
import LatencyMonitor from './LatencyMonitor';
import { QuickChangeKeyToolbar } from '../Settings/NotationSettings';

const BottomBar: React.FC = () => {
  return (
    <div
      className={classnames(
        'flex items-center gap-3 bg-base-200 py-2 px-3 border-t border-base-300 shadow-sm',
        styles.bottombar
      )}
    >
      <QuickChangeKeyToolbar />
      <div className="divider divider-horizontal" />
      <LatencyMonitor />
    </div>
  );
};

export default BottomBar;
