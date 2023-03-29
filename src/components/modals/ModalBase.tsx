import { useModal } from '@/hooks/useModal';
import { useEffect } from 'react';

const ModalBase = () => {
  const {
    modalDataState: { isOpen, title, content },
    closeModal,
  } = useModal();

  /**
   * @description 모달의 배경을 클릭하면 모달이 닫히도록 함
   */
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    /**
     * @description e.target 은 클릭한 요소를 가리키고 e.currentTarget 은 이벤트가 등록된 요소를 가리킴
     * @description e.target 과 e.currentTarget 이 같다는 것은 클릭한 요소가 이벤트가 등록된 요소와 같다는 것이므로 배경을 클릭한 것이라는 것을 의미
     * @description 배경을 클릭한 경우에만 모달을 닫도록 함
     */
    console.log(e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  /**
   * @description 모달이 열리면 body 에 modal-open 클래스를 추가하고 닫히면 제거
   * @description 모달이 열리면 스크롤을 막고 닫히면 스크롤을 풀어줌
   * @description 모달이 열리면 body 에 overflow-y: hidden 을 추가하고 닫히면 제거
   */
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="w-3/4 rounded-md bg-white p-4 md:w-1/2 lg:w-1/3">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={closeModal}
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
