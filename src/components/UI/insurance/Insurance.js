import React from "react";
import styled from "styled-components";
import { Card } from "../radio/RadioComponent";
import Typography from "../typography/Typography";

const Insurance = () => {
  return (
    <Card>
      <Typography
        fontSize={"standard"}
        fontWeight="bold"
        textAlign={"start"}
        marginBottom="14.5px"
      >
        Insurance
      </Typography>
      <InputBox
        id="test"
        type={"text"}
        placeholder="Insurance carrier and p…"
      />
    </Card>
  );
};

export default Insurance;

const InputBox = styled.input`
  width: 85%;
  height: 2.31rem;
  border-radius: 4px;
  background: #f8f9fc;
  border: 1px solid #e7eff0;
  outline-width: 0;
  padding: 5px;
  color: #000000;
`;
