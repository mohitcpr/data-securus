import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import bgImage from "../../assets/images/bg.jpg";
import Pay from "../../assets/images/payment.svg";
import { useHistory, useLocation } from "react-router-dom";
import { fetchProductById } from "../../services/home";
import ProductDetails from "./ProductDetails";
import CheckoutForm from "./CheckoutForm";

const Container = styled.section`
  /* background: linear-gradient(80deg, #006466 0%, #4d194d 86%); */
  background-image: linear-gradient(
      80deg,
      hsla(300, 50.980392156862756%, 20%, 0.9),
      hsla(181.1764705882353, 100%, 20%, 0.9)
    ),
    url(../../assets/images/bg.jpg);
  width: 100%;
  text-align: center;
`;
const Main = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  // width: 80%;
  background-color: white;
  margin: 100px auto;
  text-align: left;
  width: auto;
  display: inline-flex;
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px black;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CheckoutMain = (props) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetchProductById(props?.match?.params?.productId);
      if (res?.success) {
        setProduct({ ...res?.data });
      }
    };
    getProduct();
  }, []);
  if (product === null) {
    return null;
  }
  return (
    <Container>
      <Main>
        <CheckoutForm product={product} />
        <ProductDetails item={product} />
      </Main>
    </Container>
  );
};

export default CheckoutMain;
