import { modalState } from '@/atoms/modalState';
import React, { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import BaseButton from './buttons/BaseButton';
import HeaderGuard from './HeaderGuard';
import LoginModal from './modals/ModalBase';
import TempTesting from './modals/TempTesting';

const Header = () => {
  const [{ isOpen, title, content }, setModalContent] =
    useRecoilState(modalState);

  const itemClass = 'flex justify-center items-center cursor-pointer';

  /**
   * @description 모달을 열고 닫는 함수
   */
  const toggleModal = () => {
    console.log('wow');
    setModalContent((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 z-header box-border flex h-header w-full items-center justify-between bg-white px-baseX">
        <div className="flex items-center justify-center">
          <Link to={'/'}>
            <h1 className="cursor-pointer font-Ubuntu text-5xl">MungMung</h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-x-[3vw] text-2xl">
          <div className={`${itemClass}`}>멍멍위키</div>
          <div className={`${itemClass}`}>
            <Link to={'/walking'}>산책인증</Link>
          </div>
          <div className={`${itemClass}`}>애견컬럼</div>
          <div className="cursor-pointer">
            <BsSearch />
          </div>
          <div>
            <BaseButton size="md" onClick={toggleModal}>
              로그인
            </BaseButton>
          </div>
        </div>
      </div>
      {/**
       * Header 를 fixed 로 할때 height 가 날아가버려 레이아웃이 깨지는 현상을 해결하기 위해 Header 의 height 만큼의 HeaderGuard 컴포넌트를 삽입
       */}
      <HeaderGuard />
      {/* 모달 컴포넌트 추가 */}
      <LoginModal
        isOpen={isOpen}
        title={title}
        content={<TempTesting />}
        onClose={toggleModal}
      />
    </>
  );
};

export default Header;
