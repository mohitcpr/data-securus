import styled from "@emotion/styled";
import React from "react";
import data from "../../Common/data";
const Container = styled.div`
  width: 80%;
  margin: 50px auto;
`;
const HeadContainer = styled.header`
  text-align: center;
  background-image: linear-gradient(
      80deg,
      hsla(300, 50.980392156862756%, 20%, 0.9),
      hsla(181.1764705882353, 100%, 20%, 0.9)
    ),
    url(../../assets/images/bg.jpg);
  padding: 10px;
  color: white;
`;
const Header = styled.div`
  font-size: 24px;
`;
const SubHeading = styled.div`
  font-size: 16px;
`;
const TextHead = styled.h2``;
const TextPara = styled.p``;
const BodyContainer = styled.div`
  padding: 20px;
  background: #f3f3f3;
`;
const Tnc = () => {
  return (
    <>
      <Container>
        <HeadContainer>
          <Header>Terms & Conditions</Header>
          <SubHeading>Last updated on 11th December 2021</SubHeading>
        </HeadContainer>
        <BodyContainer>
          {data.tnc.map((item) => {
            if (item.ty === "H")
              return (
                <TextHead
                  dangerouslySetInnerHTML={{ __html: item.txt }}
                ></TextHead>
              );
            if (item.ty === "P")
              return item.txt.map((para) => (
                <TextPara dangerouslySetInnerHTML={{ __html: para }}></TextPara>
              ));
          })}
        </BodyContainer>
      </Container>
    </>
  );
};

export default Tnc;
