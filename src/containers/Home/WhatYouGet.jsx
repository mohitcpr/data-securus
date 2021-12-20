import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import bgImage from "../../assets/images/bg.jpg";
import { IconContext } from "react-icons";
// icons
import { AiFillCheckCircle } from "react-icons/ai";
const Container = styled.section`
  /* background: linear-gradient(80deg, #006466 0%, #4d194d 86%); */
  background-image: linear-gradient(
      80deg,
      hsla(181.1764705882353, 100%, 20%, 0.9),
      hsla(300, 50.980392156862756%, 20%, 0.9)
    ),
    url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 180px;
  padding-right: 180px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  color: ${colors.white};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 3.2em;
  font-weight: 600;
  text-align: center;
`;
const CheckList = styled.p`
  color: ${colors.white};
  /* justify-content: center; */
  padding-left: 10px;
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const List = styled.div``;

const WhatYouGet = () => {
  return (
    <Container>
      <Heading>What You Will Get?</Heading>
      <Main>
        <List>
          <IconContext.Provider value={{ color: "#fff" }}>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>50K+ Fonts Collections</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>Premium Businesses Banners</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>7000+ Logo Designs</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1.2 GB Instagram Motion Graphics</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>3000+ Animated Infographics Slide</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>2GB Social Media Banners / Creatives</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>80+ Language Fonts</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>350+ Calligraphy Fonts</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>25GB 3D Wall Background</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>200+ Studio Backgrounds</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1200+ wedding Background</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>100+ wedding Clipart Collection</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>300+ Album Background</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>300+ PNG Text Files</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>700+ Stock Photos</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>800+ Lights Collection</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>3500+ PNG Clipart</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>2500+ T-Shirts Designs</CheckList>
            </ListSection>
          </IconContext.Provider>
        </List>
        <List>
          <IconContext.Provider value={{ color: "#fff" }}>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1800+ Royalty Free Images (5.5GB)</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1230+ Universal Background Collections</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1480+ Business Cards</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1150+ Flyers & Phemphlets</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1050+ Texturs</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>50 Letter Head, 9 Brochure</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>12 Floral Seamless Vector Pattern</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Logo Tips CDR</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>700+ Editable Vector Logo</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Vector Web Elements</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Vector Icons</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Vector Cliparts</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>1000+ Indian Festivals Post</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>
                200+ Studio Pack Including Hair, Dress & More
              </CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>365 Instagram Post (1.8 GB)</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>120+ Text Effect Style PSD</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>New Year 150 GB Collection PSD</CheckList>
            </ListSection>
            <ListSection>
              <AiFillCheckCircle />
              <CheckList>and MUCH MORE............</CheckList>
            </ListSection>
          </IconContext.Provider>
        </List>
      </Main>
    </Container>
  );
};

export default WhatYouGet;
