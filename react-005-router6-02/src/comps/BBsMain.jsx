import { useState, useEffect } from "react";
import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import {
  BBsDto as bbsData,
  BBsList as bbsListData,
} from "../data/BBsData";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);

  /**
   * 가. BBsList.jsx 에서 bbsList 데이터를 props 로 받아
   *    만들던 BBsItem 컴포넌트를 BBsMain.jsx 에서 만들고 있다
   */
  const bbsListItemView = bbsList?.map((item) => {
    return <BBsItem item={item} key={item.id} />;
  });

  const BBsBody = () => {
    return (
      <>
        <h3>자유게시판</h3>
        <Outlet />
      </>
    );
  };
  const bbsRouter = useRoutes([
    {
      // rootPath : /bbs 로 요청
      path: "/",
      element: <BBsBody />,
      children: [
        {
          // path 에 "" 이 연결된 경우
          // rootPath 와 함께 제일먼저 보여질 Component
          path: "",
          element: (
            <>
              {/**
               * 나. BBsMain 영역에서 생성된 bbsListIitemView 를
               *  BBsList 컴포넌트 사이에 주입하였다
               *  별도의 변수로 설정하지 않았다
               * 다. 컴포넌트 사이에 주입된 {bbsListItemView} 컴포넌트는
               *  BBsList 에서 {children} 이라는 정해진 props 변수로 받는다
               *
               */}
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>,
            </>
          ),
        },
        {
          // path 에 "" 이 연결된 경우
          // rootPath 와 함께 제일먼저 보여질 Component
          path: "writer",
          element: <BBsInput />,
        },
        {
          // Navigate Component
          // 무조건 redirect 하기 위한 컴포넌트
          // to 에 지정한 URL path 로 무조건 화면 전환한다.
          path: "home",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  return bbsRouter;
};
export default BBsMain;
