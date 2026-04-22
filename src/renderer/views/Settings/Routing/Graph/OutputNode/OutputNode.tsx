import React from 'react';
import { NodeProps, Handle, Position } from 'react-flow-renderer';

import { ApiMidiOutput } from 'main/types/api';

import { Icon } from 'renderer/components';
import { useTranslation } from 'react-i18next';

type Props = NodeProps & {
  data: {
    output: ApiMidiOutput;
  };
};

const OutputNode: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  let bgClass = 'bg-[#303030]';
  if (data.output.type === 'internal') {
    bgClass = 'bg-[#1148e1]';
  } else if (data.output.type === 'websocket') {
    bgClass = 'bg-[#c17f29]';
  } else if (data.output.type === 'physical' && data.output.opened) {
    bgClass = 'bg-[#127c4f]';
  }

  const handleColor =
    data.output.type === 'internal'
      ? '#648bf4'
      : data.output.type === 'websocket'
      ? '#e1af6f'
      : data.output.type === 'physical' && data.output.opened
      ? '#20d489'
      : '#5c5c5c';

  const containerClasses = [
    'flex flex-col w-full h-full p-[4px_4px_4px_12px]',
    'bg-gradient-interactive',
    bgClass,
    !data.output.connected ? 'opacity-50' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClasses = [
    'border-none bg-none w-[8px] h-[32px] left-0 pr-[8px] pl-0 pt-[8px] pb-[8px]',
    'after:block after:content-[" "] after:absolute after:left-0 after:top-[8px]',
    'after:border-t-[8px] after:border-b-[8px] after:border-r-[8px] after:border-transparent',
    'handle-triangle hover:text-white',
  ].join(' ');

  const handleStyle: React.CSSProperties = {
    '--handle-color': handleColor,
  } as React.CSSProperties;

  return (
    <div className={containerClasses}>
      <Handle
        className={handleClasses}
        style={handleStyle}
        type="target"
        position={Position.Left}
      />
      <div className="text-[12px]">
        {data.output.type === 'internal' && <Icon name="window" />}
        {data.output.type === 'physical' && <Icon name="midi" />}
        {data.output.type === 'websocket' && <Icon name="overlay" />}
        &nbsp;
        {data.output.name}
      </div>
      {data.output.type === 'physical' && (
        <div className="flex flex-row-reverse justify-between mt-auto">
          {data.output.error && (
            <div className="inline-flex items-center gap-1 text-[12px] text-white bg-[#d84547] px-[3px] py-0 rounded-[2px]">
              <Icon name="midi-error" /> {t('common.error')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputNode;
