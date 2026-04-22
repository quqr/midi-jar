/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useMidiRouting } from 'renderer/contexts/MidiRouting';
import { Icon } from 'renderer/components';

import Graph from './Graph';

const Routing: React.FC = () => {
  const { inputs, outputs, wires, refreshDevices, addRoute, deleteRoute, clearRoutes } =
    useMidiRouting();
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-grow p-4-6">
        <Graph
          inputs={inputs}
          outputs={outputs}
          wires={wires}
          onAddRoute={addRoute}
          onDeleteRoute={deleteRoute}
        />
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-base-100 shadow-[0_-2px_8px_rgba(0,0,0,0.15)] border-t border-base-content/10">
        <button type="button" className="btn btn-neutral btn-sm" onClick={refreshDevices}>
          <Icon name="refresh" />
          {t('settings.routingSettings.refreshDevices')}
        </button>
        <div className="flex-1 border-t border-base-content/10 mx-2" />
        <button type="button" className="btn btn-error btn-sm" onClick={clearRoutes}>
          <Icon name="trash" />
          {t('settings.routingSettings.clearAll')}
        </button>
      </div>
    </div>
  );
};

export default Routing;
