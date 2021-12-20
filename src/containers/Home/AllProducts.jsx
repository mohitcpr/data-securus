import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import bgImage from "../../assets/images/concentrated-coworkers-holding-digital-camera-in-t-PSWJMW5.jpg";
import ProductImage1 from "../../assets/images/2.png";
import ProductImage2 from "../../assets/images/3.png";
import ProductImage3 from "../../assets/images/4.png";
import ProductImage4 from "../../assets/images/5.png";
import ProductImage5 from "../../assets/images/6.png";
import ProductImage6 from "../../assets/images/7.png";
import ProductImage7 from "../../assets/images/8.png";
import ProductImage8 from "../../assets/images/9.png";
import ProductImage9 from "../../assets/images/10.png";
// slider

const Container = styled.section`
  background-image: linear-gradient(
      80deg,
      hsla(181.1764705882353, 100%, 20%, 0.9),
      hsla(300, 50.980392156862756%, 20%, 0.9)
    ),
    url(${bgImage});
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Heading = styled.h1`
  color: ${colors.white};
  /* font-family: "Merriweather Sans", Sans-serif; */
  font-size: 39px;
  margin-left: 80px;
  padding-top: 100px;
  @media only screen and (max-width: 900px) {
    margin:0;
    padding-left: 20px;
  }
`;
const Subheading = styled.p`
  color: ${colors.white};
  color: #c4c4c4;
  margin-left: 80px;
  @media only screen and (max-width: 900px) {
    padding-left: 20px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  background-color: hsla(0, 0%, 86.66666666666667%, 0.25);
  @media only screen and (max-width: 900px) {
    max-width: 100%;
  }
`;
const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 86.66666666666667%, 0.25);
  text-align: center;
`;
const CardMain = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;
const AllProducts = () => {
  return (
    <Container>
      <Heading>What We Can Do?</Heading>
      <Subheading>
        Everything you Need to Create the Perfect Design 10,000+ Premium Social
        Media Banners Of Over 15+ Industries
      </Subheading>
      <Main>
        <Card>
          <Image src={ProductImage1} alt="banner" />
        </Card>
        <CardMain>
          <Image src={ProductImage2} alt="banner" />
        </CardMain>
        <Card>
          <Image src={ProductImage3} alt="banner" />
        </Card>
        <Card>
          <Image src={ProductImage4} alt="banner" />
        </Card>
        <CardMain>
          <Image src={ProductImage5} alt="banner" />
        </CardMain>
        <Card>
          <Image src={ProductImage6} alt="banner" />
        </Card>
        <Card>
          <Image src={ProductImage7} alt="banner" />
        </Card>
        <CardMain>
          <Image src={ProductImage8} alt="banner" />
        </CardMain>
        <Card>
          <Image src={ProductImage9} alt="banner" />
        </Card>
      </Main>
    </Container>
  );
};

export default AllProducts;
