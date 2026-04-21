import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import useEvent from 'renderer/hooks/useEvent';

import { Icon } from '../Icon';

import { InputNumberProps } from './types';

import styles from './InputNumber.module.scss';

const cx = classNames.bind(styles);

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
        className={cx('base', 'input', 'input-bordered', 'w-full', 'join-item', className)}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type="number"
        step={step}
        {...rest}
      />
      <button
        type="button"
        className={cx('decrement', 'btn', 'join-item')}
        onClick={decrement}
        aria-label={t('common.decrement')}
      >
        <Icon name="minus" />
      </button>
      <button
        type="button"
        className={cx('increment', 'btn', 'join-item')}
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
