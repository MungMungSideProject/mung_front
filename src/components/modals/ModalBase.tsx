import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  onClose: () => void;
}

const ModalBase: React.FC<ModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-3/4 rounded-md bg-white p-4 md:w-1/2 lg:w-1/3">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ModalBase;
