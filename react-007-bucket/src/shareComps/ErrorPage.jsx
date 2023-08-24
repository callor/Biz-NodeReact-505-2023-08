import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>오메!!!</h1>
      <p>프로젝에 문제가 발생했습니다. 관리자에게 문의해 주세요</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
