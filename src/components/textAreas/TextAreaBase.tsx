import React, { TextareaHTMLAttributes, useRef, useState } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
  label: string;
}

const TextAreaBase: React.FC<TextAreaProps> = ({
  fullWidth,
  label,
  ...options
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) =>
    setIsFocused(e.target.value !== '');

  return (
    <div
      className={`${
        fullWidth ? 'w-full' : 'w-1/2'
      } relative mb-16 box-border flex flex-col`}
    >
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        maxLength={250}
        className={`box-border min-h-[30vh] resize-none border-gray py-5 text-inputText outline-none transition-all duration-700 ${
          isFocused ? 'rounded-3xl bg-slate-100 px-6' : 'rounded-3xl border-b-2'
        }`}
        {...options}
      />
      <label
        className={`absolute select-none transition-all duration-700 ${
          isFocused
            ? '-top-16 text-formItemTitle font-bold'
            : 'top-0 -translate-y-1/2 text-inputText text-gray'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextAreaBase;
