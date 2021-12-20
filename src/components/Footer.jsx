import styled from "@emotion/styled";
import React from "react";

const Container = styled.footer`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: linear-gradient(
      80deg,
      hsla(300, 50.980392156862756%, 20%, 0.9),
      hsla(181.1764705882353, 100%, 20%, 0.9)
    ),
    url(../../assets/images/bg.jpg);
  color: white;
  @media only screen and (max-width: 900px) {
    /* width: 100%; */
    flex-direction: column;

  }
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  margin: 0px 30px;
  @media only screen and (max-width: 900px) {
    padding:5px
  }
`;

const Footer = () => {
  return (
    <Container>
      <Link href="/privacy" target="_blank">
        Privacy Policy
      </Link>
      <Link href="/tnc" target="_blank">
        Terms & Conditions
      </Link>
      <Link href="/refund-policy" target="_blank">
        Refund Policy
      </Link>
    </Container>
  );
};

export default Footer;
