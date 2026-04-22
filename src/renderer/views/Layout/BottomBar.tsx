import React from 'react';

import LatencyMonitor from './LatencyMonitor';
import { QuickChangeKeyToolbar } from '../Settings/NotationSettings';

const BottomBar: React.FC = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 py-2 px-4 border-t border-base-300 shadow-sm">
      <QuickChangeKeyToolbar />
      <div className="divider divider-horizontal mx-2" />
      <LatencyMonitor />
    </div>
  );
};

export default BottomBar;
