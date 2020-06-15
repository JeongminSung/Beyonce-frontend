import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const Stat = ({data, owner}) => {
    return (
        <Wrap>
          <LikeWrap>
            <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0.5 0.5 16 16" >
                <path fill="none" d="M.5.5h16v16H.5z"></path><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
            </svg>  
            </Icon>
          </LikeWrap>
          <Summary>
            <ProjectName>{data.title}</ProjectName>
            <div>
              <StatWrap>
                <svg fill="#959595" margin-right="15" margin-top="2" position="relative" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"></path><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path></svg>
                <StatText>{data.like}</StatText>
              </StatWrap>
              <StatWrap>
              <svg fill="#959595" margin-right="15" margin-top="2" position="relative" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"></path><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path></svg>
                <StatText>{data.view}</StatText>
              </StatWrap>
            </div>
          </Summary>
          <Published>
            게시 :
            <Time>1989년 3월 18일</Time>
          </Published>
        </Wrap>
    )
}

export default Stat;

const Wrap = styled.div `
    background-color: #000;
    color: #fff;
    display: block;
    padding: 50px 0;
    text-align: center;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
`
const LikeWrap = styled.div `
    align-self: flex-start;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: -6px;
    padding-bottom: 6px;
    position: relative;
`
const Icon = styled.div `
    height: 75px;
    margin: 0 auto;
    width: 75px;
    -webkit-box-align: center;
    align-items: center;
    background: #0057ff;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    fill: #fff;
`

const Summary = styled.div `
    margin: 0 auto;
    max-width: 384px;
    padding-top: 18px;
    color: #fff;
    text-align: center;
`
const ProjectName = styled.div `
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin: 0 auto 10px;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    display: block;
    color: #fff;
    text-align: center;
`
const StatWrap = styled.div `
    margin-right: 9px;
    color: #959595;
    display: inline-block;
    font-size: 14px;
    height: 17px;
    line-height: 1.2;
    border: 0;
    margin-right: 10px;
    outline: 0;
    padding: 0;
    margin-top: 10px;
`

const StatText = styled.span `
    border: 0;
    font-size: 100%;
    margin-left: 5px;
    outline: 0;
    padding: 0;
    color: #959595;
    line-height: 1.2;
`

const Published = styled.div `
    color: #959595;
    padding-top: 24px;
    line-height: 1.3;
`

const Time = styled.span `
    color: #959595;
    font-size: 100%;
    text-align: center;
`