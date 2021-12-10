import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import img from "../../assets/images/Colorful-Hexagon-Mind-Map-7-768x768.png";
import payment from "../../assets/images/check_out_img-copy.jpg";

import { IconContext } from "react-icons";
// icons
import { AiFillStar, AiFillEye, AiOutlineCheck } from "react-icons/ai";
const Container = styled.section`
  background-color: ${colors.white};
  
`;
const Main = styled.div`
  opacity: 0.92;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TextContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 120px;
`;
const Image = styled.img`
  padding: 40px;
  width: 600px;
  height: 600px;
  padding-left: 80px;
`;
const Heading = styled.h1`
  color: ${colors.primary};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 29px;
  font-weight: 600;
`;
const ReviewText = styled.p`
  color: ${colors.gray};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 19px;
  text-align: center;
`;
const Subheading = styled.p`
  color: ${colors.red};
  text-align: center;
  font-weight: 600;
`;
const List = styled.p`
  color: ${colors.lightGray};
  /* justify-content: center; */
  padding-left: 10px;
  line-height: 1px;
`;
const CheckList = styled.p`
  color: ${colors.black};
  /* justify-content: center; */
  padding-left: 10px;
  line-height: 1px;
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ImagePayment = styled.img`

`;
const MainProduct = () => {
  return (
    <Container>
      <Main>
        <Image src={img} alt="banner" />
        <TextContent>
          <Heading>All-In-One Mega Graphic Bundle</Heading>
          <ReviewText>
            (112232 REVIEWS) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconContext.Provider value={{ color: "#F0AD4E" }}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </IconContext.Provider>
          </ReviewText>
          <Subheading>5231 Sold in last 12 Hours</Subheading>
          <IconContext.Provider value={{ color: "#000000" }}>
            <ListSection>
              <AiFillEye />
              <List>81 People are currently looking at this product</List>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <List>Verified Purchases (113234)</List>
            </ListSection>
          </IconContext.Provider>
          <Heading>TODAY'S DEAL PRICE : ₹199</Heading>
          <CommonBtn title="BUY IT TODAY" />
          <ImagePayment src={payment} alt="banner" />
          <IconContext.Provider value={{ color: "#006466" }}>
            <ListSection>
              <AiOutlineCheck />
              <CheckList> Get Instant Download</CheckList>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <CheckList>20000+ Premium AI Files</CheckList>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <CheckList>200000+ Premium PSD Files</CheckList>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <CheckList>1500+ Premium EPS Files</CheckList>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <CheckList>200000+ Premium CDR Files</CheckList>
            </ListSection>
          </IconContext.Provider>
        </TextContent>
      </Main>
    </Container>
  );
};

export default MainProduct;
