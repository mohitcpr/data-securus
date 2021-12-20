import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import bgImage from "../../assets/images/bg.jpg";
import ProductImage1 from "../../assets/images/2.png";
import ProductImage2 from "../../assets/images/3.png";
import ProductImage3 from "../../assets/images/4.png";
import ProductImage4 from "../../assets/images/Typography-Backgrounds.jpg";
import ProductImage5 from "../../assets/images/Background-V.jpg";
import ProductImage6 from "../../assets/images/Cartoon-3D-768x432-1.png";
import ProductImage7 from "../../assets/images/8.png";
import ProductImage8 from "../../assets/images/9.png";
import ProductImage9 from "../../assets/images/10.png";
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
    margin:0;
    padding-left: 20px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  @media only screen and (max-width: 900px) {
    max-width: 100%;
  }
`;
const ImageDuo = styled.img`
  width: 510px;
  height: 287px;
  max-width: 100%;
`;

const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 86.66666666666667%, 0.25);
`;
const CardMain = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;
const CardHeading = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-weight: 600;
  font-size: 29px;
`;

const Offers = () => {
  return (
    <Container>
      <Heading>What We Can Do?</Heading>
      <Subheading>
        Everything you Need to Create the Perfect Design 10,000+ Premium Social
        Media Banners Of Over 15+ Industries
      </Subheading>
      <Main>
        <Card>
          <CardHeading>500+ FESTIVAL POST (PSD)</CardHeading>
          <Image src={ProductImage1} alt="banner" />
        </Card>
        <Card>
          <CardHeading>4k+ T-Shirt Designs</CardHeading>
          <Image src={ProductImage2} alt="banner" />
        </Card>
        <Card>
          <CardHeading>1500+ Wedding Invitations</CardHeading>
          <Image src={ProductImage3} alt="banner" />
        </Card>
        <Card>
          <CardHeading>200+ Typography Compositions</CardHeading>
          <ImageDuo src={ProductImage4} alt="banner" />
        </Card>

        <Card>
          <CardHeading>7000+ HD Graphic</CardHeading>
          <ImageDuo src={ProductImage5} alt="banner" />
        </Card>
        <Card>
          <CardHeading>
            10k+ HD Graphics, Logo, Business Letterhead (PSD)
          </CardHeading>
          <Image src={ProductImage7} alt="banner" />
        </Card>
        <Card>
          <CardHeading>20K+ Photoshop</CardHeading>
          <Image src={ProductImage8} alt="banner" />
        </Card>
        <Card>
          <CardHeading>160+ Infographic</CardHeading>
          <Image src={ProductImage9} alt="banner" />
        </Card>
        <Card>
          <CardHeading>90+ Motion Gradients</CardHeading>
          <ImageDuo src={ProductImage4} alt="banner" />
        </Card>

        <Card>
          <CardHeading>140+ Human Characters</CardHeading>
          <ImageDuo src={ProductImage6} alt="banner" />
        </Card>
        <Card>
          <CardHeading> 82+ Text Effects (PSD)</CardHeading>
          <Image src={ProductImage7} alt="banner" />
        </Card>
        <Card>
          <CardHeading>12K+Shades & 10K+Fonts</CardHeading>
          <Image src={ProductImage8} alt="banner" />
        </Card>
        <Card>
          <CardHeading>160+ Infographic</CardHeading>
          <Image src={ProductImage9} alt="banner" />
        </Card>
      </Main>
    </Container>
  );
};

export default Offers;
