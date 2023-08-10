import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { getBbsList } from "../modules/FetchModule";

const BBsContext = createContext();
// use**() 시작되는 함수는 react 에서 Hook 함수라고 한다.
// 여러가지 react 와 협력하여 다양한 기능을 구현하는 함수 들이다.
// 기본적으로 제공하는 Hook 함수와 함께 사용자정의(개발자정의) Hook 함수를
// 만들어 사용할수 있다.
// 이때 사용자정의 Hook 함수는 반드시 use 접두사로 시작한다
const useBBsContext = () => {
  return useContext(BBsContext);
};

const BBsContextProvder = ({ children }) => {
  const [bbs, setBBs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });
  const [bbsList, setBbsList] = useState([]);
  useEffect(() => {
    const fetchBBsList = async () => {
      const result = await getBbsList();
      setBbsList(result);
    };
    fetchBBsList();
  }, []);

  //   const props = {
  //     bbs: bbs,
  //     setBBs: setBBs,
  //     bbsList: bbsList,
  //     setBbsList: setBBs,
  //   };
  // JS 의 객체를 만들때 {속성:변수} 형식일 경우
  // 속성 명칭과 변수의 이름이 같으면 한번만 써도된다. ES5+
  const props = {
    bbs,
    setBBs,
    bbsList,
    setBbsList,
  };
  // BBsContext.Provider 라는 Store 에 state 와 setState() 함수를 담아준다
  return (
    <BBsContext.Provider value={props}>
      {children}
    </BBsContext.Provider>
  );
};

export { BBsContextProvder, useBBsContext };
