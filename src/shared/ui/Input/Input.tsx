import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';

// забираем все атрибуты Input и убираем из них те которые мы хотим написать по своему
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    autoFocus,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);
  const [carretPosition, setCarretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
    }
    ref.current?.focus();
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCarretPosition(e.target.value.length);
  };

  const onBlur = () => setIsFocused(false);

  const onFocus = () => setIsFocused(true);

  const onSelect = (e: any) => {
    setCarretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${carretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
