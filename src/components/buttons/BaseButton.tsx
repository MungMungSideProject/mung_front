import { ButtonBasePropsOptional } from '@/types/buttonTypes';

const variantClasses = {
  default: 'bg-black hover:bg-opacity-75',
  success: 'bg-gray-600 hover:bg-opacity-75',
  warning: 'bg-error hover:bg-opacity-75',
  error: 'bg-error hover:bg-opacity-75',
  disabled: 'bg-gray-400 cursor-not-allowed !text-black',
};

const sizeClasses = {
  sm: 'py-2 px-3',
  md: 'py-4 px-5',
  lg: 'py-6 px-7',
  xl: 'py-8 px-9',
};

const BaseButton = ({
  variant = 'default',
  size,
  fullWidth,
  children,
}: ButtonBasePropsOptional) => {
  const variantClass = variantClasses[variant!];
  const sizeClass = sizeClasses[size!];
  const fullSizeClass = fullWidth ? 'w-full' : null;
  return (
    <div
      className={`relative box-border flex min-w-[64px] cursor-pointer select-none items-center justify-center gap-1 text-ellipsis whitespace-nowrap rounded-lg text-white transition-all ${fullSizeClass} ${sizeClass} ${variantClass}`}
    >
      {children}
    </div>
  );
};

export default BaseButton;
