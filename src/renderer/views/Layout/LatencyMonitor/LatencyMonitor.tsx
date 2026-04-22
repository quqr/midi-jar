import React from 'react';
import { useTranslation } from 'react-i18next';

import useMidiLatency from 'renderer/hooks/useMidiLatency';

const Routing: React.FC = () => {
  const [current, highest, resetHighest] = useMidiLatency();
  const { t } = useTranslation();

  return (
    <div className="flex flex-row rounded-md border border-solid border-base-300 bg-base-100 px-3 py-2 shadow-sm">
      <div
        className="text-right appearance-none bg-transparent text-base-content/70 font-mono text-sm"
        title={t('layout.averageRoutingLatency')}
      >
        {`${current.toFixed(3)}ms`}
      </div>
      <button
        type="button"
        className="border-0 border-l border-solid border-base-300 text-right appearance-none bg-transparent text-warning font-mono text-sm ml-3 pl-3 transition-all duration-200 hover:text-warning-hover"
        onClick={resetHighest}
        title={t('layout.highestRoutingLatency')}
      >
        {`${highest.toFixed(3)}ms`}
      </button>
    </div>
  );
};

export default Routing;
