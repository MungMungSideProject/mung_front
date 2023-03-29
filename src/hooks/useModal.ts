import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalState';
import { useCallback } from 'react';

interface OpenModalProps {
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
}

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return {
          ...prev,
          isOpen: false,
        };
      }),
    [setModalDataState]
  );

  const openModal = useCallback(
    ({ title, content, callback }: OpenModalProps) => {
      setModalDataState({
        isOpen: true,
        title,
        content,
        callback,
      });
    },
    [setModalDataState]
  );

  return { modalDataState, closeModal, openModal };
};
