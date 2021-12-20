import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import bgImage from "../../assets/images/bg.jpg";

import { IconContext } from "react-icons";
// icons
import { BsStar } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import { fetchProduct } from "../../services/home";
import { useHistory } from "react-router-dom";
const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  margin-left: 50px;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;
const IconBox = styled.div`
  background-color: ${colors.primary};
  /* width: 100px;
  height: 100px; */
  border-radius: 30px;
  padding: 25px;
  align-items: center;
  margin: auto;
  width: 20%;
`;
const Heading = styled.h1`
  color: "#006466";
  /* font-family: "Merriweather Sans", Sans-serif; */
  margin: 5px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  padding-top: 20px;
`;
const Price = styled.h1`
  color: "#006466";
  margin: 5px;
  text-align: center;
  font-size: 2.2em;
  padding-top: 20px;
`;
const CheckList = styled.p`
  color: "#006466";
  /* justify-content: center; */
  padding-left: 10px;
  margin: 5px;
`;
const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonPay = styled.button`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 20;
  text-align: center;
  cursor: pointer;
`;
// const ButtonText = styled.h3`
//   color: ${colors.white};
//   font-size: 20;
//   text-align: center;
// `;
const PricingCard = styled.div``;

const ProductDetails = ({ item }) => {
  return (
    <Card>
      <IconBox>
        <IconContext.Provider value={{ color: "#fff", size: 50 }}>
          <BsStar />
        </IconContext.Provider>
      </IconBox>
      {/* {JSON.stringify(product)} */}
      <PricingCard>
        <Heading isRecommended={item.is_recommended === "1"}>
          {item.name}
        </Heading>
        <Price isRecommended={item.is_recommended === "1"}>
          ₹ {item.selling_price}
        </Price>
        <IconContext.Provider
          value={{
            color: "#31576a",
          }}
        >
          {item?.desc?.map((descitem) => (
            <ListSection style={{ color: "#31576a" }}>
              <AiFillCheckCircle />
              <CheckList>{descitem}</CheckList>
            </ListSection>
          ))}
        </IconContext.Provider>
      </PricingCard>
    </Card>
  );
};

export default ProductDetails;
