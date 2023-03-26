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
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setIsFocused(e.target.value !== '');

  return (
    <div
      className={`${
        fullWidth ? 'w-full' : 'w-1/2'
      } relative mb-16 box-border flex flex-col`}
    >
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        className={`box-border  border-gray py-5 text-inputText outline-none transition-all duration-700 ${
          isFocused
            ? 'rounded-3xl border-b-2 bg-slate-100 px-6'
            : 'rounded-3xl rounded-bl-none rounded-br-none border-b-4'
        }`}
        {...options}
      />
      <label
        className={`absolute  transition-all duration-700 ${
          isFocused
            ? '-top-16 text-formItemTitle font-bold'
            : 'top-1/2 -translate-y-1/2 text-inputText text-gray'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputBase;
