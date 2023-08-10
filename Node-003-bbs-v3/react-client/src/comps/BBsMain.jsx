import BBsList from "./BBsList";
import BBsInput from "./BBsInput";

const BBsMain = () => {
  // deps(useEffect() 함수의 두번째 파라메터)가 빈 배열([]) 이면
  // 화면이 최초 Rendering 된 직후 한번 실행되는 Event 함수
  // 컴포넌트 마운트 : 화면이 최초 Rendering 이 (모두) 된 직후
  // 마운트 시점 event
  // useEffect(() => {
  //   const fetchBBsList = async () => {
  //     const result = await getBbsList();
  //     setBbsList(result);
  //   };
  //   fetchBBsList();
  // }, []);

  return (
    <>
      <BBsInput />
      <BBsList />
    </>
  );
};
export default BBsMain;
