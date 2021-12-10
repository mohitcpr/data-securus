import React from "react";
import styled from "@emotion/styled";
import colors from "../../Common/Colors";
import CommonBtn from "../../components/CommonBtn";
import bgImage from "../../assets/images/bg.jpg";
import Pay from "../../assets/images/payment.svg";

const Container = styled.section`
  /* background: linear-gradient(80deg, #006466 0%, #4d194d 86%); */
  background-image: linear-gradient(
      80deg,
      hsla(300, 50.980392156862756%, 20%, 0.9),
      hsla(181.1764705882353, 100%, 20%, 0.9)
    ),
    url(../../assets/images/bg.jpg);
`;
const Main = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Heading = styled.h1`
  color: ${colors.white};
  font-family: "Merriweather Sans", Sans-serif;
  font-size: 39px;
  font-weight: 600;
`;
const TextContent = styled.div`
  margin-right: 40px;
`;

const PlanName = styled.h1`
  color: ${colors.white};
`;
const PaymentContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 0.3);
  padding: 20px;
  height: max-content;
  margin-left: 30px;
  margin-top: 10%;
`;
const PaymentDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
const PaymentName = styled.div``;
const PaymentPrice = styled.div`
  /* padding-left: 30px; */
`;
const ProductText = styled.h3`
  color: ${colors.white};
  font-size: 19px;
  /* font-weight: 600; */
`;
const BoldText = styled.h1`
  color: ${colors.white};
  font-size: 39px;
  font-weight: 600;
`;

const Form = styled.form``;
const Label = styled.p`
  color: ${colors.white};
`;
const TextBox = styled.input`
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.white};
  border-radius: 10px;
  background-color: "#02010100";
  vertical-align: middle;
  width: 100%;
  max-width: 100%;
  padding: 12px;
  height: auto;
  background: 0 0;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.2s linear;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
`;
const TextArea = styled.textarea`
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.white};
  border-radius: 10px;
  background-color: "#02010100";
  vertical-align: middle;
  width: 100%;
  max-width: 100%;
  padding: 12px;
  height: auto;
  background: 0 0;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.2s linear;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
`;

const Text = styled.h1`
  color: ${colors.white};
  font-size: 19px;
`;
const TextData = styled.p``;
const Textprivacy = styled.a``;

const PayImage = styled.img``;
const ButtonPay = styled.button`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ButtonText = styled.h3`
  color: ${colors.white};
  font-size: 20;
  text-align: center;
`;
const CheckoutMain = () => {
  return (
    <Container>
      <Main>
        {/* <Image src={img} alt="banner" /> */}
        <TextContent>
          <Heading>Your Plan</Heading>
          <PlanName>"Basic plan" has been added to your cart.</PlanName>
          <Form
            method="post"
            action="http://api.datasecurus.com/v1/cashfree/pay.php"
          >
            <Label>Name</Label>
            <TextBox name="customer_name" type="text" placeholder="Your Name" />
            <Label>Phone No.</Label>
            <TextBox
              name="customer_phone"
              type="tel"
              placeholder="Your Phone Number"
            />
            <Label>Email</Label>
            <TextBox
              name="customer_email"
              type="email"
              placeholder="Your Email"
            />
            <Label>product</Label>
            <TextBox name="product_id" type="number" placeholder="Your Email" />
            <Label>Note</Label>
            <TextArea
              name="order_note"
              type="text"
              placeholder="Your Name"
              rows={4}
            />
            <ButtonPay type="submit">
              <ButtonText>place your order</ButtonText>
            </ButtonPay>
          </Form>
        </TextContent>
        <PaymentContainer>
          <PaymentDetails>
            <PaymentName>
              <ProductText>Product</ProductText>
              <ProductText>Plan</ProductText>
              <ProductText>Subtotal</ProductText>
              <BoldText>Total</BoldText>
            </PaymentName>
            <PaymentPrice>
              <ProductText>SUBTOTAL</ProductText>
              <ProductText>122</ProductText>
              <ProductText>112</ProductText>
              <BoldText>1222</BoldText>
            </PaymentPrice>
          </PaymentDetails>
          <Text>Credit Card/Debit Card/NetBanking</Text>
          <PayImage src={Pay} alt="banner" />
          <TextData>Your personal data will be used to process your</TextData>
          <TextData>order, support your experience throughout this</TextData>
          <TextData>website, and for other purposes.</TextData>
          {/* <Textprivacy href="">privacy policy.</Textprivacy> */}
        </PaymentContainer>
      </Main>
    </Container>
  );
};

export default CheckoutMain;
