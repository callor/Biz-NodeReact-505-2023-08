import { useRoutes, Outlet, NavLink } from "react-router-dom";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";
const BBsMain = () => {
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
              <BBsList />
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
      ],
    },
  ]);
  return bbsRouter;
};
export default BBsMain;
