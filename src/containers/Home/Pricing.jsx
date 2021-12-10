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

const Container = styled.section`
  background-color: ${colors.primaryBg};
  width: 100%;
  height: 100%;
`;
const CardHeading = styled.h1`
  color: ${colors.primary};
  line-height: 1px;
  text-align: center;
  font-size: 3.2em;
  padding-top: 100px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 180px;
  margin-right: 180px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  background-image: ${(props) =>
    props.isRecommended &&
    `linear-gradient(80deg,hsla(181.1764705882353, 100%, 20%, 0.9),hsla(300, 50.980392156862756%, 20%, 0.9)),url(../../assets/images/bg.jpg)`};
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
  color: ${(props) => (props.isRecommended ? `#fff` : `#006466`)};
  /* font-family: "Merriweather Sans", Sans-serif; */
  line-height: 1px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  padding-top: 20px;
`;
const Price = styled.h1`
  color: ${(props) => (props.isRecommended ? `#fff` : `#006466`)};
  line-height: 1px;
  text-align: center;
  font-size: 2.2em;
  padding-top: 20px;
`;
const CheckList = styled.p`
  color: ${(props) => (props.isRecommended ? `#fff` : `#006466`)};
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

const ButtonPay = styled.button`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding:10px 16px;
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
`;
// const ButtonText = styled.h3`
//   color: ${colors.white};
//   font-size: 20;
//   text-align: center;
// `;
const PricingCard = styled.div``;

const Pricing = () => {
  const [product, setProduct] = useState([]);
  // const [id, setId] = useState()

  const getProducts = async () => {
    try {
      // const req = {
      //   uid,
      // };
      const res = await fetchProduct();

      console.log(res);
      if (res.success) {
        setProduct(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const history = useHistory();
  const clickOnLink = (e) => {
    e.stopPropagation();
    console.log(e?.target);
    history.push("checkout/" + e?.target?.dataset?.id);
    
  };
  return (
    <Container>
      <CardHeading>Our Pricing</CardHeading>
      <Main>
        {product.map((item) => (
          <Card isRecommended={item.is_recommended === "1"}>
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
                {item.selling_price}
              </Price>
              <IconContext.Provider
                isRecommended={item.is_recommended === "1"}
                value={{ color: "#cfcfcf" }}
              >
                {item?.desc?.map((descitem) => (
                  <ListSection>
                    <AiFillCheckCircle />
                    <CheckList isRecommended={item.is_recommended === "1"}>
                      {descitem.description}
                    </CheckList>
                  </ListSection>
                ))}
              </IconContext.Provider>
            </PricingCard>
            <ButtonPay data-id={item.id} onClick={clickOnLink}>
              place your order
            </ButtonPay>
          </Card>
        ))}

        {/* 2nd card */}
        {/*  */}
      </Main>
    </Container>
  );
};

export default Pricing;
