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
const Home = () => {
  return (
    <Container>
      <HomeMain />
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
