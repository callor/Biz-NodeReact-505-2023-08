import { useState, useEffect } from "react";
import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";
import {
  BBsDto as bbsData,
  BBsList as bbsListData,
} from "../data/BBsData";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);

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
              <BBsList bbsList={bbsList} />
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
