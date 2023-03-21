{
  /**
   * Header 를 fixed 로 할때 height 가 날아가버려 레이아웃이 깨지는 현상을 해결하기 위해 Header 의 height 만큼의 HeaderGuard 컴포넌트를 삽입
   */
}
const HeaderGuard = () => {
  return <div className="h-header w-0 bg-transparent"></div>;
};

export default HeaderGuard;
