import styled from "styled-components";

const Search = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  width: ${(props) => props.$width ?? "auto"};
  height: 3.75rem;
  padding: 3px;
`;

function SearchComponent({ children, width }) {
  return <Search $width={width}>{children}</Search>;
}

export default SearchComponent;
