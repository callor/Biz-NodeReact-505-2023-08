import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  padding-left: 2rem;
  background-color: white;
  margin: 0;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.62rem, 0.75rem;
  background-size: 1rem;
`;

/**
 * JS 함수 기본 매개변수 설정하기
 * 다음과 같은 함수가 있을때
 * const func =(name, age) =>{
 *      console.log(name, age)
 * }
 *
 * 이 함수를 호출할때 name 값과 age 값을 파라메터로 전달해 주어야 한다
 *           func("홍길동",33)
 * 그런데 함수를 호출하면서 만약 파라메터를 전달하지 않으면
 *          func()
 * 함수가 실행되는 과정에서 name 값과 age 값이 문제가 발생하여
 * 오류가 날수 있다
 * 이때 파라메터가 전달되지 않았을때 기본값을 설정할수 있다
 * const func =(name = "이몽룡", age = 0) =>{
 *      console.log(name, age)
 * }
 * 파라메터가 전달되지 않았을때 name 은 "이몽룡", age 는 0 으로 값이 세팅된다
 */
const Input = ({
  id = "q",
  name = "",
  placeholder = "검색어를 입력하세요",
}) => {
  return (
    <SearchInput name={name} placeholder={placeholder} id={id} />
  );
};

export default Input;
