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
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    text-align: center;
  }
`;
const TextContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  max-width: 600px;
  width: calc(50% - 80px);
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Image = styled.img`
  padding: 40px;
  width: 600px;
  max-width: 600px;
  width: calc(50% - 80px);
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 40px 0;
  }
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
`;
const Subheading = styled.p`
  color: ${colors.red};
  font-weight: 600;
`;
const List = styled.p`
  color: ${colors.lightGray};
  /* justify-content: center; */
  padding-left: 10px;
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
const ImagePayment = styled.img`
  max-width: 100%;
`;
const BtnLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  background: #247173;
  padding: 10px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const AdobCollection = () => {
  return (
    <Container>
      <Main>
        <Image src={"/images/amc.png"} alt="banner" />
        <TextContent>
          <Heading>Adobe Master Collection 2022 Complete Bundle</Heading>
          <ReviewText>
            (5433 REVIEWS) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconContext.Provider value={{ color: "#F0AD4E" }}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </IconContext.Provider>
          </ReviewText>
          <Subheading>1210 Sold in last 12 Hours</Subheading>
          <IconContext.Provider value={{ color: "#000000" }}>
            <ListSection>
              <AiFillEye />
              <List>23 People are currently looking at this product</List>
            </ListSection>
            <ListSection>
              <AiOutlineCheck />
              <List>Verified Purchases (113234)</List>
            </ListSection>
          </IconContext.Provider>
          <Heading>TODAY'S DEAL PRICE : ₹249</Heading>
          <div>
            <BtnLink href="/checkout/2" style={{ textDecoration: "none" }}>
              Buy it Today
            </BtnLink>
            <BtnLink
              href="#pricing"
              style={{ textDecoration: "none", background: "#5d345f" }}
            >
              More Plans
            </BtnLink>
          </div>
          <ImagePayment src={payment} alt="banner" />
          <IconContext.Provider value={{ color: "#006466" }}>
            <ListSection>
              {/* <AiOutlineCheck /> */}
              <CheckList> </CheckList>
            </ListSection>
            <ListSection>
              {/* <AiOutlineCheck /> */}
              <CheckList></CheckList>
            </ListSection>
            <ListSection>
              {/* <AiOutlineCheck /> */}
              <CheckList></CheckList>
            </ListSection>
            <ListSection>
              {/* <AiOutlineCheck /> */}
              <CheckList></CheckList>
            </ListSection>
            <ListSection>
              {/* <AiOutlineCheck /> */}
              <CheckList></CheckList>
            </ListSection>
          </IconContext.Provider>
        </TextContent>
      </Main>
    </Container>
  );
};

export default AdobCollection;
