import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  height: ${(props) => props.$styles.height};
  font-size: ${(props) => props.$styles.fontSize};
  font-weight: ${(props) => props.$styles.fontWeight};
  border-radius: ${(props) => props.$styles.borderRadius};
  text-align: center;
  color: ${(props) => props.$styles.color};
  width: ${(props) => props.$styles.width};
  background-color: ${(props) => props.$styles.backgroundColor};
`;
