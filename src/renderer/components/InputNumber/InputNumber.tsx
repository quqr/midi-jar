import React from 'react';
import { useTranslation } from 'react-i18next';

import useEvent from 'renderer/hooks/useEvent';

import { Icon } from '../Icon';

import { InputNumberProps } from './types';

export const InputNumber: React.FC<InputNumberProps> = ({
  className,
  value,
  onChange,
  step,
  ...rest
}) => {
  const { t } = useTranslation();
  const increment = useEvent(() => {
    if (onChange) onChange(Number(value) + Number(step));
  });

  const decrement = () => {
    if (onChange) onChange(Number(value) - Number(step));
  };

  const handleChange = useEvent((v: string) => {
    if (onChange) onChange(Number(v));
  });

  return (
    <div className="join">
      <input
        className={`input input-bordered w-full join-item ${className ?? ''}`}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type="number"
        step={step}
        {...rest}
      />
      <button
        type="button"
        className="btn join-item"
        onClick={decrement}
        aria-label={t('common.decrement')}
      >
        <Icon name="minus" />
      </button>
      <button
        type="button"
        className="btn join-item"
        onClick={increment}
        aria-label={t('common.increment')}
      >
        <Icon name="plus" />
      </button>
    </div>
  );
};

InputNumber.defaultProps = {
  className: undefined,
};

export default InputNumber;
