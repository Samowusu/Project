import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.$styles.justifyContent};
  align-items: ${(props) => props.$styles.alignItems};
  flex-direction: ${(props) => props.$styles.flexDirection};
  width: ${(props) => props.$styles.width};
  background-color: ${(props) => props.$styles.backgroundColor};
  margin-top: ${(props) => props.$styles.marginTop};
  margin-bottom: ${(props) => props.$styles.marginBottom};
  margin-left: ${(props) => props.$styles.marginLeft};
  margin-right: ${(props) => props.$styles.marginRight};
  padding-top: ${(props) => props.$styles.paddingTop};
  padding-bottom: ${(props) => props.$styles.paddingBottom};
  padding-right: ${(props) => props.$styles.paddingRight};
  padding-left: ${(props) => props.$styles.paddingLeft};
  border-top-color: ${(props) => props.$styles.borderTopColor};
  border-top-style: ${(props) => props.$styles.borderTopStyle};
  border-top-width: ${(props) => props.$styles.borderTopWidth};
`;
