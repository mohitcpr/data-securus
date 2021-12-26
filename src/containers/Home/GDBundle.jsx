import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import img from "../../assets/images/Colorful-Hexagon-Mind-Map-7-768x768.png";
import { IconContext } from "react-icons";
// icons
import { AiFillCheckCircle } from "react-icons/ai";
const Container = styled.section`
  background-color: ${colors.primaryBg};
  padding: 40px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  color: ${colors.primary};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 3.2em;
  font-weight: 600;
  text-align: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const SubText = styled.p`
  /* padding-left: 160px;
  padding-right: 160px; */
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const SubHeading = styled.h1`
  color: ${colors.primary};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 39px;
  font-weight: 600;
  padding-top: 40px;
`;
const Image = styled.img`
  /* padding: 40px;
  width: 570px;
  height: 570px;
  max-width: 100%; */
  padding: 40px;
  width: 600px;
  max-width: 600px;
  width: calc(50% - 80px);
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 40px 0;
  }
`;
const CheckList = styled.p`
  color: ${colors.primary};
  /* justify-content: center; */
  padding-left: 10px;
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const TextContent = styled.div`
  width: 100%;
`;
const TextBox = styled.p`
  padding-bottom: 40px;
`;
const GDBundle = () => {
  return (
    <Container>
      <Heading>What Actually is a Ultimate Graphic Designing Bundle?</Heading>
      <SubText>
        Ultimate Graphic Designing Bundle Is A Pack Of 15,00,000+ Pre-Made
        Templates Which are Easily Editable AI, CDR, PSD, EPS, SVG Files
        Formats.
      </SubText>
      <SubText>
        We Have Designed Soft, Clean, And Ultra-Sleek Banners For You Of Over
        15+ Big Industries Like Spa & Saloon, Hospital, Gym, Hotel, Restaurant,
        Cafe, Immigration, Travel, Digital Marketing & COVID-19, Festival,
        Jewelry, Education, E-Commerce, Yoga, Automobile Banners.
      </SubText>
      <Main>
        <TextContent>
          <SubHeading>What You Will Get In This Insane Bundle?</SubHeading>
          <TextBox>
            After Accessing This Insane Bundle, You Will Get 10000+ Pre-Made
            Social Media Banners With 1000+ In Built Editable AI, CDR, PSD, EPS,
            SVG Files Formats.
          </TextBox>
          <IconContext.Provider value={{ color: "#006466" }}>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>20000+ Premium AI Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>200000+ Premium PSD Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1500+ Premium EPS Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Premium SVG Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>200000+ Premium CDR Files</CheckList>
            </ListSection>
          </IconContext.Provider>
        </TextContent>
        <Image src={"/images/gdb.png"} alt="banner" />
      </Main>
    </Container>
  );
};

export default GDBundle;
