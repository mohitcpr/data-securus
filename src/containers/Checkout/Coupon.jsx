import styled from "@emotion/styled";
import React, { useState } from "react";
const InputContainer = styled.div`
  display: flex;
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #006466;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 4px;
  border-color: #006466;
  color: #006466;
`;
const ApplyCta = styled.div`
  border: none;
  background: #35666f;
  color: white;
  border-radius: 4px;
  margin: 5px 0;
  margin-left: 5px;
  padding: 0px 10px;
`;
const Message = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  margin-top: -5px;
  font-weight: 500;
`;
const SuccessMessage = styled(Message)`
  color: green;
`;
const ErrorMessage = styled(Message)`
  color: red;
`;
const Coupon = ({ price }) => {
  const [couponCode, setCouponCode] = useState("");
  const [applied, setApplied] = useState("");
  const [invalid, setInvalied] = useState("");
  const onApplyCoupon = () => {
    if (couponCode.toUpperCase() === "NEWYEAR2022") {
      setApplied(
        `You will get ₹ ${Math.floor((price * 15) / 100)} within 3 working days`
      );
      setInvalied("");
    } else {
      setApplied("");
      setInvalied("Invalid Coupon Code");
    }
  };
  return (
    <>
      <Label>Coupon Code</Label>
      <InputContainer>
        <Input
          name="customer_coupon_code"
          placeholder="Enter Coupon Code"
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <ApplyCta onClick={onApplyCoupon}>Apply</ApplyCta>
      </InputContainer>
      {applied && <SuccessMessage>{applied}</SuccessMessage>}
      {invalid && <ErrorMessage>{invalid}</ErrorMessage>}
    </>
  );
};

export default Coupon;
