import React, { InputHTMLAttributes, useState } from 'react';

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  className?: string;
}

const InputBase = ({
  fullWidth,
  className,
  placeholder,
  ...options
}: Partial<InputBaseProps>) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    setFocused(event.target.value !== '');

  return (
    <div className={`relative mt-20 ${fullWidth ? 'w-full' : ''}`}>
      <input
        className={`block w-full transform-gpu  border-b-4 border-transparent border-b-gray  bg-transparent px-4 py-6 text-inputText tracking-wide  outline-none transition-all duration-300  ${
          focused ? 'rounded-3xl border-none bg-slate-300' : ''
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...options}
      />
      <label
        className={`pointer-events-none absolute top-1/2 left-0 text-2xl  tracking-wider  transition-all duration-500 ${
          focused
            ? '-top-14 transform  text-formItemTitle font-bold text-black'
            : 'text-gray'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputBase;
