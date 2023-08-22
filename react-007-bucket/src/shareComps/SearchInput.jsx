import styled from "styled-components";

const StyledInput = styled.input`
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
  background-position: 0.62rem 0.5rem;
  background-size: 1rem;
`;

const SearchInput = ({
  name = "input",
  value = "",
  placeholder = "검색어를 입력하세요",
  onChange,
}) => {
  return (
    <StyledInput
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default SearchInput;
