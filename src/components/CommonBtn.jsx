import React from "react";
import styled from "@emotion/styled";
import colors from "../Common/Colors";

const Container = styled.section``;
const Buttons = styled.button`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  display: block;
  border-radius: 5px;
  border: none;
  @media only screen and (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const BtnText = styled.h3`
  color: ${colors.white};
  font-size: 20;
  text-align: center;
`;
const CommonBtn = ({ title }) => {
  return (
    <Container>
      <Buttons>
        <BtnText>{title}</BtnText>
      </Buttons>
    </Container>
  );
};

export default CommonBtn;
