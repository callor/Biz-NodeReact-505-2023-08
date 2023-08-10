import { Outlet } from "react-router-dom";
const BBsMain = () => {
  /*
    App
     |--|---BBsMain : /bbs
        |---BBsList : /bbs/""
        |---BBsInput : /bbs/insert

    위와 같이 계층적(hierarchy) 의 화면 Layout 구현할때
    만약 /bbs/insert 로 메뉴 링크가 요청되면
    BBsMain 에 BBsInput 포함하여 하나의 화면을 구현하게 된다
    이때 BBsInput 컴포넌트를 포함할 자리를 BBsMain 에 만들어 두어야 한다
    <Outlet /> 컴포넌트 키워드를 정해 놓으면 그 자리에 BBsInput 컴포넌트가
    끼워넣져 하나의 화면을 구현한다
  */
  return (
    <>
      <Outlet />
    </>
  );
};

export default BBsMain;
