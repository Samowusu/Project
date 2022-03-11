import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
import NextIcon from "../../assets/svgs/NextIcon";
import PreviousIcon from "../../assets/svgs/PreviousIcon";

NewPagination.defaultProps = {
  itemCount: 300,
  onChange: (value, number) => {
    console.log({ value, number });
  },
  currentPage: 4,
  pageSize: 8,
};

function NewPagination({ itemCount, onChange, currentPage, pageSize }) {
  const [currentPageState, setCurrentPageState] = useState(currentPage ?? 3);

  const changeHandler = (event, pageNumber) => {
    console.log({ event, pageNumber });
    setCurrentPageState(pageNumber);
    onChange(event, pageNumber, pageSize);
  };

  const renderPaginationItem = (item) => {
    switch (item.type) {
      case "previous":
        return (
          <PageNavigationButton onClick={item.onClick}>
            <PreviousIcon />
          </PageNavigationButton>
        );
      case "next":
        return (
          <PageNavigationButton onClick={item.onClick}>
            <NextIcon />
          </PageNavigationButton>
        );
      case "end-ellipsis":
        return (
          <PageNumberButton>
            <p>...</p>
          </PageNumberButton>
        );
      case "start-ellipsis":
        return (
          <PageNumberButton>
            <p>...</p>
          </PageNumberButton>
        );
      case "page":
        return (
          <PageNumberButton onClick={item.onClick} $selected={item.selected}>
            {item.page}
          </PageNumberButton>
        );
      default:
        break;
    }
  };

  return (
    <Pagination
      count={Math.ceil(itemCount / pageSize)}
      onChange={changeHandler}
      renderItem={renderPaginationItem}
      page={currentPage ?? currentPageState}
    />
  );
}

export default NewPagination;

const PageNavigationButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 18px;
`;

const PageNumberButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.$selected ? "#00778A" : "transparent")};
  color: ${(props) => (props.$selected ? "#fff" : "#17394D")};
  cursor: pointer;
  margin: 0 3px;
`;
