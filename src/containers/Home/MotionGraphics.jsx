import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import ProductImage1 from "../../assets/images/2.gif";
import ProductImage2 from "../../assets/images/1-1.gif";
import ProductImage3 from "../../assets/images/4.gif";

const Container = styled.section``;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 140px;
  margin-right: 140px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin-left: 10px;
  margin-right: 10px;
  }
`;
const Heading = styled.h1`
  color: ${colors.primary};
  font-size: 39px;
  /* margin-left: 80px; */
  text-align: center;
  padding-top: 100px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 50px;
  border-radius: 10px;
  background-color: ${colors.primary};
`;
const CardHeading = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: 29px;
  font-weight: 600;
`;

const MotionGraphics = () => {
  return (
    <Container>
      <Heading>1000+ Motion Graphics (AEP)</Heading>

      <Main>
        <Card>
          <CardHeading>Motion Graphics</CardHeading>
          <Image src={ProductImage1} alt="banner" />
        </Card>
        <Card>
          <CardHeading>Motion Graphics</CardHeading>
          <Image src={ProductImage2} alt="banner" />
        </Card>
        <Card>
          <CardHeading>Motion Graphics</CardHeading>
          <Image src={ProductImage3} alt="banner" />
        </Card>
      </Main>
    </Container>
  );
};

export default MotionGraphics;
