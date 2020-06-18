import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ContentsTitle from "./ContentsTitle";
import Work from "./Work";
import SectionRight from "./SectionRight";
import ContentFooter from "./ContentFooter";
import "./Contents.css";

const Contents = (props) => {
  return (
    <Wrap>
      <Header />
      <SectionWrap>
        <TitleWrap>
          <ContentsTitle />
        </TitleWrap>
        <MainWrap>
          <WorkWrap>
            <Work />
          </WorkWrap>
          <RightWrap>
            <SectionRight />
          </RightWrap>
        </MainWrap>
      </SectionWrap>
      <FooterWrap>
        <ContentFooter />
      </FooterWrap>
    </Wrap>
  );
};

export default Contents;

const Wrap = styled.div``;
const SectionWrap = styled.div`
  width: 100%;
  margin-top: 60px;
`;
//margin-top: 60px; SectionWrap

const TitleWrap = styled.div`
  margin: 0 auto;
  width: 80%;
`;
//width: 80%;

const MainWrap = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
`;

const WorkWrap = styled.div`
  margin: 0 auto;
  width: 80%;
`;
//width: 80%;

const RightWrap = styled.div`
  position: fixed;
  right: 5%;
`;
//position: fixed;

const FooterWrap = styled.div`
  margin: 0 auto;
  width: 80%;
`;
//width: 80%;
