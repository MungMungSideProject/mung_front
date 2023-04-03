import React, { InputHTMLAttributes, useRef, useState } from 'react';

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label: string;
}

const InputBase = ({
  fullWidth,
  label,
  ...options
}: Partial<InputBaseProps>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setIsFocused(e.target.value !== '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (options.onChange) {
      options.onChange(e);
    }
  };

  return (
    <div
      className={`${
        fullWidth ? 'w-full' : 'w-1/2'
      } relative mb-16 box-border flex flex-col`}
    >
      <input
        id={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        onChange={handleChange}
        value={value}
        className={`box-border border-gray py-5 text-inputText outline-none transition-all duration-700 ${
          isFocused
            ? 'rounded-3xl border-b-2 bg-slate-100 px-6'
            : 'rounded-3xl rounded-bl-none rounded-br-none border-b-2'
        }`}
        {...options}
      />
      <label
        htmlFor={label}
        className={`absolute transition-all duration-700 ${
          isFocused
            ? '-top-10 text-formItemTitle font-bold md:-top-12 lg:-top-16'
            : 'top-1/2 -translate-y-1/2 text-inputText text-gray'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputBase;
