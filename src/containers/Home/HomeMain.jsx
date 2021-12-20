import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import bgImage from "../../assets/images/bg.jpg";

const Container = styled.section`
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;
const Main = styled.div`
  /* background: linear-gradient(80deg, #006466 0%, #4d194d 86%); */
  background-image: linear-gradient(
      80deg,
      hsla(181.1764705882353, 100%, 20%, 0.9),
      hsla(300, 50.980392156862756%, 20%, 0.9)
    ),
    url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;
const Heading = styled.h1`
  color: ${colors.white};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 39px;
  padding-right: 50px;
  @media only screen and (max-width: 900px) {
    padding-right: 0;
    text-align: center;
  }
`;
const TextContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
const Image = styled.img`
  padding: 40px;
  max-width: 40%;
  @media only screen and (max-width: 900px) {
    max-width: 100%;
    padding: 40px 0px;
  }
`;

const Subheading = styled.p`
  color: ${colors.white};
  color: #c4c4c4;
`;
const Logo = styled.img`
  max-width: 300px;
`;
const HomeMain = () => {
  return (
    <Container>
      <Main>
        <Image src={"/images/mainbanner.png"} alt="banner" />
        <TextContent>
          <Logo src="/static/logo-white.png" alt="Data Securus" />
          <Heading>WORLD'S BEST MARKETPLACE BUILDER</Heading>
          <Subheading>
            That Gets You More Clients, Higher Amount Projects, Builds Your
            Authority & Kills The Competition…
          </Subheading>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            <CommonBtn title="Get Instant Access To Graphic Bundle" />
          </a>
        </TextContent>
      </Main>
    </Container>
  );
};

export default HomeMain;
