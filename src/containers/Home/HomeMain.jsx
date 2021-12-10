import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import bgImage from "../../assets/images/bg.jpg";
import img from "../../assets/images/1.jpg";

const Container = styled.section``;
const Main = styled.div`
  /* background: linear-gradient(80deg, #006466 0%, #4d194d 86%); */
  background-image: linear-gradient(
      80deg,
      hsla(181.1764705882353, 100%, 20%, 0.90),
      hsla(300, 50.980392156862756%, 20%, 0.90)
    ),
    url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;
const Heading = styled.h1`
  color: ${colors.white};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 39px;
`;
const TextContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
const Image = styled.img`
  padding: 40px;
`;

const Subheading = styled.p`
  color: ${colors.white};
  color: #c4c4c4;
`;
const HomeMain = () => {
  return (
    <Container>
      <Main>
        <Image src={img} alt="banner" />
        <TextContent>
          <Heading>WORLD'S FIRST & ONLY MARKETPLACE BUILDER</Heading>
          <Subheading>
            That Gets You More Clients, Higher Amount Projects, Builds Your
            Authority & Kills The Competition…
          </Subheading>
          <CommonBtn title="Get Instant Access To Graphic Bundle" />
        </TextContent>
      </Main>
    </Container>
  );
};

export default HomeMain;
