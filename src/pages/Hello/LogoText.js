import React from "react";
import styled from "styled-components";

const LogoText = (props) => {
  return <Text>Behance</Text>;
};

export default LogoText;

const Text = styled.p`
  font-size: 36px;
  line-height: 47px;
  font-weight: 400;
  color: #f4f4f4;
  font-family: ${(props) => props.theme.fonts};
`;
