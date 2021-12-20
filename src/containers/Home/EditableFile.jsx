import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import Img1 from "../../assets/images/1-p7iyy2n9jwakr4r6h7lvg23t7jy1bbcw4kdu8gihe0.png";
import Img2 from "../../assets/images/2-1.png";

import { IconContext } from "react-icons";
// icons
import { AiFillCheckCircle } from "react-icons/ai";

const Container = styled.section``;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 140px;
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
const TextContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
const SubHeading = styled.h1`
  color: ${colors.primary};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 19px;
  font-weight: 600;
`;
const Text = styled.p``;
const Image = styled.img`
  max-width: 100%;
`;
const CheckList = styled.p`
  color: ${colors.black};
  /* justify-content: center; */
  padding-left: 10px;
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const EditableFile = () => {
  return (
    <Container>
      <Heading>Premium & High Demanded Editable File !</Heading>

      <Main>
        <Image src={Img1} alt="banner" />
        <TextContainer>
          <SubHeading>After Accessing This Bundle, You Will Get....</SubHeading>
          <Text>
            This Ultimate Graphic Designing Pack Is Especially Designed For
            Graphic Designers By Our Expert Graphic Designers That Will Save
            Your 1000s Of Hours & Make You Money On A Recurring Basis.
          </Text>
          <IconContext.Provider value={{ color: "#006466" }}>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Full Access to Over 1500000+ Editable Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Over 15+ Industries Banners</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>100% Premium Quality</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>100% Commercial Usage Rights</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Unlimited Lifetime Usage Rights</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Access To Download All Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList> Onetime Payment</CheckList>
            </ListSection>
          </IconContext.Provider>
        </TextContainer>
      </Main>
      <Main>
        <TextContainer>
          <SubHeading>
            Grow Your Income With This Awesome Social Media Bundle
          </SubHeading>
          <Text>
            You Can Save A Lot Of Time & Multiply Your Income By Selling Banner
            Design Service To Your Clients
          </Text>
          <IconContext.Provider value={{ color: "#006466" }}>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Save Time, Increase Productivity</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Over 15+ Industries Banners</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>100% Editable & Customizable</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>100% Compatible</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1500000+ Editable Formats</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Designed By Expert Designers</CheckList>
            </ListSection>
          </IconContext.Provider>
        </TextContainer>
        <Image src={Img2} alt="banner" />
      </Main>
    </Container>
  );
};

export default EditableFile;
