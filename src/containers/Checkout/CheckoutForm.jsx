import styled from "@emotion/styled";
import React from "react";
import CheckoutMain from "./CheckoutMain";

const Container = styled.div`
  min-width: 300px;
  margin-right: 50px;
  @media only screen and (max-width: 768px) {
    margin-right: 0px;
    min-width: 100%;
  }
`;
const Heading = styled.h2``;
const Form = styled.form``;
const InputContainer = styled.div`
  margin: 10px 0;
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #006466;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 4px;
  border-color: #006466;
  color: #006466;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 4px;
  color: #006466;
  border: 2px solid #006466;
  height: 100px;
`;
const RadioContainer = styled.label`
  display: flex;
  border: 2px solid #593960;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  margin: 10px 0;
  justify-content: space-between;
`;
const RadioLabel = styled.span``;
const RadioInput = styled.input``;
const Submit = styled.input`
  background-image: linear-gradient(
      80deg,
      hsla(300, 50.980392156862756%, 20%, 0.9),
      hsla(181.1764705882353, 100%, 20%, 0.9)
    ),
    url(../../assets/images/bg.jpg);
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
`;
const PaymentIconContainer = styled.div`
  display: flex;
`;
const PaymentIcon = styled.img`
  max-height: 14px;
`;
const CheckoutForm = ({ product }) => {
  return (
    <>
      <Container>
        <Heading>Billing Details</Heading>
        <Form
          method="post"
          action="https://www.datasecurus.com/api/v1/cashfree/pay.php"
        >
          <InputContainer>
            <Label>Name</Label>
            <Input
              name="customer_name"
              placeholder="Enter Your Name"
              type="text"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              name="customer_email"
              placeholder="Enter Your Google Mail ID"
              type="email"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Phone</Label>
            <Input
              name="customer_phone"
              placeholder="Enter Your 10 Digit Phone Number"
              type="tel"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Notes (optional)</Label>
            <TextArea
              name="order_note"
              placeholder="Enter Order Notes"
            ></TextArea>
          </InputContainer>
          <Input name="product_id" type="hidden" value={product.product_id} />
          <Heading>Payment Method</Heading>
          <RadioContainer htmlFor="upi">
            <div>
              <RadioInput
                type="radio"
                name="payment_mode"
                value="upi, dc, cc, nb"
                id="upi"
                required
              />
              <RadioLabel>UPI</RadioLabel>
            </div>
            <PaymentIconContainer>
              <PaymentIcon src="/static/payment/upi.png" />
            </PaymentIconContainer>
          </RadioContainer>
          <RadioContainer htmlFor="cc">
            <div>
              <RadioInput
                type="radio"
                name="payment_mode"
                value="cc, dc, nb, upi"
                id="cc"
                required
              />
              <RadioLabel>Credit/Debit Card</RadioLabel>
            </div>
            <PaymentIconContainer>
              <PaymentIcon
                src="/static/payment/cc.png"
                style={{ maxHeight: 20 }}
              />
            </PaymentIconContainer>
          </RadioContainer>
          <RadioContainer htmlFor="nb">
            <div>
              <RadioInput
                type="radio"
                name="payment_mode"
                value="nb, upi, dc, cc"
                id="nb"
                required
              />
              <RadioLabel>Net Banking</RadioLabel>
            </div>
            <PaymentIconContainer>
              <PaymentIcon src="/static/payment/ib.png" />
            </PaymentIconContainer>
          </RadioContainer>
          <Submit type="submit" value="Place Order" />
        </Form>
      </Container>
    </>
  );
};

export default CheckoutForm;
