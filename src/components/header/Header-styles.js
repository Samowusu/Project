import styled from "styled-components";

const HeaderBottom = styled.div`
  width: 100%;
  /* background-image: url("../../assets/images/header.png"); */
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
  padding-top: ${(props) => props.$paddingTop ?? "0"};
  padding-right: ${(props) => props.$paddingRight ?? "0"};
  padding-bottom: ${(props) => props.$paddingBottom ?? "0"};
  padding-left: ${(props) => props.$paddingLeft ?? "0"};
`;

function HeaderBottomComponent({
  children,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  backgroundColor,
  img,
}) {
  return (
    <HeaderBottom
      $img={img}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $backgroundColor={backgroundColor}
    >
      {children}
    </HeaderBottom>
  );
}

export default HeaderBottomComponent;
