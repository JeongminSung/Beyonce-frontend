import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const Comment = () => {
    return (
        <Wrap>
          <InfoWrap>
            <ProjectComment>
              <CommentHeader>
                <Hone>대화에 참여하려면 등록</Hone>
                <Htwo>로그인하거나 등록하여 Mokyoungg 님의 프로젝트에 대해 피드백을 제공해 주세요.</Htwo>
              </CommentHeader>
            </ProjectComment>
          </InfoWrap>
        </Wrap>
    )
}

export default Comment;

const Wrap = styled.div `
    background-color: #fafafa;
    border-radius: 0 0 3px 3px;
    box-sizing: border-box;
    display: inline-block;
    padding: 90px 100px;
    text-align: center;
    width: 100%;
`

const InfoWrap = styled.div `
    position: relative;
    z-index: 1;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const ProjectComment = styled.div `
    backface-visibility: hidden;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    float: left;
    margin: 0 20px 20px 0;
    padding: 27px 30px;
    text-align: left;
    width: calc(100% - 405px);
`

const CommentHeader = styled.div `

`

const Hone = styled.h1 `
    font-size: 27px;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 10px;
`

const Htwo = styled.h2 `
    font-size: 15px;
    font-weight: normal;
    line-height: 1.3;
    margin-bottom: 15px;
    
`