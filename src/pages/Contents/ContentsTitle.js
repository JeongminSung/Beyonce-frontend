import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const ContentsTitle = ({ data, owner }) => {
  return (
    <TitleWrap>
      <Pimg>
        <Img src={owner.profile_img} />
      </Pimg>
      <Introduce>
        <WorkName>{data.title}</WorkName>
        <AuthorInt>
          <Name>{owner.fullname}</Name>
          <Dot>.</Dot>
          <Additional>Follow</Additional>
        </AuthorInt>
      </Introduce>
    </TitleWrap>
  );
};

export default ContentsTitle;

//styled

//  position: absolute;
const TitleWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  height: 83px;
  border: 0;
  font-size: 100%;
  outline: 0;
  text-align: left;
  color: #191919;
  margin: 0 auto;
`;

//TitleWrap 원래 값
//top: -83px;(Title Wrap)
//background: transparent;

const Pimg = styled.div`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  backface-visibility: hidden;
  background-color: #e8e8e8;
  border-radius: 50%;
  box-sizing: content-box !important;
  display: block;
  line-height: 0;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: brightness(70%);
    transition: all 0.3s ease-in-out;
  }
`;

const Img = styled.img`
  border-radius: inherit;
  display: block;
  width: 100%;
  height: 100%;
`;

const Introduce = styled.div`
  margin: -2px 0 0 10px;
  max-width: calc(100% - 235px - 40px);
  text-size-adjust: 100%;
`;
//Introduce 부분
//-webkit-box-flex: 1;
//  flex-grow: 1;
//  -webkit-font-smoothing: antialiased;
//color: #191919;

const WorkName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  max-width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
`;
//  color: #191919;

const AuthorInt = styled.div`
  display: flex;
  font-size: 14px;
  white-space: nowrap;
  margin: 0;
  outline: 0;
  padding: 0;
`;

const Name = styled.a`
  transition-duration: 0.1s;
  transition-property: color;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`;

const Dot = styled.span`
  display: inline;
  margin: 0 10px;
  -webkit-font-smoothing: antialiased;
`;

const Additional = styled.a`
  border: none;
  font-weight: normal;
  padding: 0;
`;
