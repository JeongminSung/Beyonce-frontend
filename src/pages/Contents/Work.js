import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { HTML } from "./WorkHtml";

const Work = () => {
  const createMarkup = () => {
    return { __html: HTML };
  };

  return (
    <WorkWrap>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </WorkWrap>
  );
};

export default Work;

const WorkWrap = styled.div`
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  color: #2b2b2b;
  line-height: 1.3;
  width: 100%;
  margin: 0 auto;
  background: #fff;
`;
