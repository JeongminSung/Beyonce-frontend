import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <BlueButton>{props.text}</BlueButton>;
};

const BlueButton = styled.button`
  height: 33px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;
  margin: 0 3px 2px 0;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  display: inline-block;
  letter-spacing: 1.1;
  &:hover {
    background-color: #0037a1;
    transition: all 0.4s ease-in-out;
  }
`;
export default Button;
