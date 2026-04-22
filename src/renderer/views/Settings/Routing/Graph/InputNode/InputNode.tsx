import React, { useRef, useCallback } from 'react';
import { NodeProps, Handle, Position } from 'react-flow-renderer';

import useMidiActivity from 'renderer/hooks/useMidiActivity';

import { ApiMidiInput } from 'main/types/api';

import { Icon } from 'renderer/components';
import { useTranslation } from 'react-i18next';

const INPUT_STATUS_TIMEOUT = 300;

type Props = NodeProps & {
  data: {
    input: ApiMidiInput;
  };
};

const InputNode: React.FC<Props> = ({ data }) => {
  const statusElementRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();

  const onActivity = useCallback(() => {
    if (statusElementRef.current) {
      if (timeout.current) clearTimeout(timeout.current);
      statusElementRef.current?.classList.add('bg-[#00ff00]');
      statusElementRef.current?.classList.remove('bg-transparent');
      timeout.current = setTimeout(() => {
        statusElementRef.current?.classList.remove('bg-[#00ff00]');
        statusElementRef.current?.classList.add('bg-transparent');
        timeout.current = null;
      }, INPUT_STATUS_TIMEOUT);
    }
  }, []);

  useMidiActivity(data.input.name, onActivity);

  const containerClasses = [
    'flex flex-col w-full h-full p-[4px]',
    data.input.opened
      ? 'bg-[#127c4f] bg-gradient-interactive'
      : 'bg-[#303030] bg-gradient-interactive',
    !data.input.connected ? 'opacity-50' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleColor = data.input.opened ? '#19a86c' : '#5c5c5c';
  const handleClasses = [
    'border-none bg-none w-[8px] h-[32px] right-0 pr-0 pl-[8px] pt-[8px] pb-[8px]',
    'after:block after:content-[" "] after:absolute after:left-[8px] after:top-[8px]',
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
        type="source"
        position={Position.Right}
      />
      <div className="text-[12px]">
        <Icon name="midi" /> {data.input.name}
      </div>
      <div className="flex flex-row justify-between mt-auto">
        {data.input.error && (
          <div className="inline-flex items-center gap-1 text-[12px] text-white bg-[#d84547] px-[3px] py-0 rounded-[2px]">
            <Icon name="midi-error" /> {t('common.error')}
          </div>
        )}
        <div
          ref={statusElementRef}
          className="absolute bottom-[4px] right-[4px] w-[6px] h-[6px] bg-transparent transition-colors duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default InputNode;
