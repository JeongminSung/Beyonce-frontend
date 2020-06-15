import React from "react";
import styled from "styled-components";

const LogoImg = (props) => {
  return (
    <Img
      src="https://static.adobelogin.com/clients/bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5/2x_ae636b0f623792081b77838920fee109.png"
      alt="로고"
    />
  );
};

export default LogoImg;

const Img = styled.img`
  height: 40px;
`;
