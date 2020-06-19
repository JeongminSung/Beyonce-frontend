import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ContentsTitle from "./ContentsTitle";
import Work from "./Work";
import SectionRight from "./SectionRight";
import Stat from "./Stat";
import Summary from "./Summary";
import Comment from "./Comment";
import "./Contents.css";

const Contents = (props) => {
  const [data, setData] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    fetch("http://10.58.3.78:8000/feed/173")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setOwner(res.data.owners[0]);
      });
  }, []);

  console.log("bigD :", data);
  console.log("own ", owner);

  return (
    <Wrap>
      <Header />
      <SectionWrap>
        <TitleWrap>
          <ContentsTitle data={data} owner={owner} />
        </TitleWrap>
        <MainWrap>
          <WorkWrap>
            <Work data={data} />
          </WorkWrap>
          <RightWrap>
            <SectionRight data={data} owner={owner} />
          </RightWrap>
        </MainWrap>
      </SectionWrap>
      <StatWrap>
        <Stat data={data} owner={owner} />
      </StatWrap>
      <SummaryWrap>
        <Summary data={data} owner={owner} />
      </SummaryWrap>
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
  z-index: 15;
`;
//position: fixed;

const StatWrap = styled.div`
  margin: 0 auto;
  width: 80%;
`;
//width: 80%;

const SummaryWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CommentWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
