import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet } from "react-router-dom";
import BBsMain from "./comps/BBsMain";

/**
 * App Component 를
 * react-router-dom v6 에서 useRoutes() Hook 함수를 생성하고
 * router 를 return 하는 구조로 변경한다
 */
function App() {
  // App Component 내에 inner Component 를 생성하기
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  }; // end AppBody
  // App.js Component 를 화면에 표현하면, react-router-dom 에 의해서 path를 감지하고
  // AppBody Component 를 화면에 렌더링 한다
  const appRouter = useRoutes([
    {
      path: "/",
      element: <AppBody />,
      children: [{ path: "bbs/*", element: <BBsMain /> }],
    },
  ]);
  return appRouter;
}

export default App;
