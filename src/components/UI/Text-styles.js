import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color ?? `#000`};
  line-height: ${(props) => props.$lineHeight};
  text-align: ${(props) => props.$textAlign ?? "center"};
`;
