import React from "react";
import styled from "styled-components";
import { Card } from "../radio/RadioComponent";
import Typography from "../typography/Typography";

const Insurance = () => {
  return (
    <Card>
      <Typography
        fontSize={"l"}
        fontWeight="bold"
        textAlign={"start"}
        marginBottom="14.5px"
      >
        Insurance
      </Typography>
      <InputBox
        id="test"
        type={"text"}
        placeholder="Insurance carrier and producer"
      />
    </Card>
  );
};

export default Insurance;

const InputBox = styled.input`
  width: 85%;
  border-radius: 4px;
  background: #f8f9fc;
  border: 1px solid #e7eff0;
  outline-width: 0;
  padding: 5px;
  color: #000000;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 2.31rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  position: relative;
`;
