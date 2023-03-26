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
    <div className="relative mt-16">
      <input
        className={`block w-full transform-gpu  border-b-4 border-transparent border-b-gray  bg-transparent px-4 py-6 text-inputText  outline-none transition-all duration-300 ${
          fullWidth ? 'w-full' : ''
        } ${className} ${
          focused ? 'rounded-3xl border-none bg-slate-200 bg-opacity-50' : ''
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...options}
      />
      <label
        className={`pointer-events-none absolute top-1/2 left-0 -translate-y-1/2  text-2xl transition-all duration-500 ${
          focused
            ? '-top-10 -translate-y-0 transform text-inputText font-bold text-black'
            : 'text-gray'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputBase;
