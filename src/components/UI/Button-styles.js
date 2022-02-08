import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 3rem;
  font-size: var(--l);
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
  color: ${(props) => {
    console.log(props);
    return props.color ? props.color : "red";
  }},
    width: ${(props) => props.$width},
    background-color: ${(props) => props.$backgroundColor ?? "red"}
`;
