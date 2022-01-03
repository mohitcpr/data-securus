import React from "react";
import HomeMain from "./HomeMain";
import styled from "@emotion/styled";
import MainProduct from "./MainProduct";
import AllProducts from "./AllProducts";
import Pricing from "./Pricing";
import Offers from "./Offers";
import GDBundle from "./GDBundle";
import EditableFile from "./EditableFile";
import WhatYouGet from "./WhatYouGet";
import MotionGraphics from "./MotionGraphics";
import AdobCollection from "./AdobCollection";

const Container = styled.div`
  margin: 0;
`;
const AdIns = styled.ins`
  display: inline-block;
  width: 728px;
  height: 90px;
  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 90px;
  }
`;
const Home = () => {
  return (
    <Container>
      <HomeMain />
      <div align="center">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8864711404313360"
          crossorigin="anonymous"
        ></script>
        <AdIns
          className="adsbygoogle"
          data-ad-client="ca-pub-8864711404313360"
        ></AdIns>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
      <MainProduct />
      <AllProducts />
      <AdobCollection />
      <Pricing />
      <Offers />
      <GDBundle />
      <EditableFile />
      <WhatYouGet />
      <MotionGraphics />
    </Container>
  );
};

export default Home;
