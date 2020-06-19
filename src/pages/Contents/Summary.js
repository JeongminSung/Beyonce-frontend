import React, { Component, useState, useEffect } from "react";
import ContentsSlide from "./ContentsSlide";
import styled from "styled-components";

const Summary = ({data, owner}) => {

    return(
        <Wrap>
          <SummaryHeader>
            <AvatarWrap>
              <Avatar target="_black" href="">
                <AvatarImg src={owner.profile_img} />
              </Avatar>
            </AvatarWrap>
            <UserInfo>
              <Name>{owner.fullname}</Name>
              <BtnWrap>
                <BtnContainer>
                  <Btn>
                    <Label>Follow</Label>
                  </Btn> {/*팔로잉, 팔로잉취소 필요*/}
                </BtnContainer>
              </BtnWrap>
            </UserInfo>  
          </SummaryHeader>
          <ProjectWrap>
            <ScrollWrap>
                <ContentsSlide owner={owner} />
            </ScrollWrap>
          </ProjectWrap>
                 {/* 기존 코드 상황
              <ScrollControl>
                <svg left="auto" right="16" transform="scaleX(-1)" fill="#959595" height="16" position="absolute" top="12" width="10" x="0" y="0" viewBox="0 0 11.92 17.66" >
                  <path d="M0,3.09l5.74,5.74L0,14.57l3.09,3.09l8.83-8.83L3.09,0L0,3.09z"></path>
                </svg>
              </ScrollControl>
              <ScrollContainer>
                <Container>
                  <ScrollerItem>
                    <ProjectCover>
                      <CoverCover>
                        <CoverWrap>
                          <CoverContent>
                            <DominantColor></DominantColor>
                            <Img src="https://mir-s3-cdn-cf.behance.net/projects/404/272c9d97759137.Y3JvcCw4MTAsNjMzLDAsMjI2.jpg" />
                          </CoverContent>
                        </CoverWrap>
                      </CoverCover>
                    </ProjectCover>
                  </ScrollerItem>
                </Container>
              </ScrollContainer>
          */}
        </Wrap>
    )
}

export default Summary;

const Wrap = styled.div `
    background-color: #191919;
    height: auto;
    position: relative;
    white-space: nowrap;
    width: 100%;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    display: block;
`
// overflow: hidden;

const SummaryHeader = styled.div `
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    left: 50px;
    line-height: 1;
    position: absolute;
    top: 50px;
    white-space: nowrap;
`

const AvatarWrap = styled.div `
    float: left;
    margin-right: 10px;
    color: #fff;
    font-weight: bold;
    line-height: 1;
`

const Avatar = styled.a `
    height: 50px;
    width: 50px;
    min-height: 50px;
    min-width: 50px;
    transition-duration: 0.1s;
    transition-property: color;
    transition-timing-function: linear;
    backface-visibility: hidden;
    background-color: #e8e8e8;
    border-radius: 50%;
    box-sizing: content-box !important;
    display: block;
    line-height: 0;
    overflow: hidden;
    font-weight: bold;
`
const AvatarImg = styled.img `
    border-radius: inherit;
    display: block;
    width: 100%;
    height: 100%;
`
const UserInfo = styled.div `
    display: inline-block;
    padding-top: 1px;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    color: #fff;
    font-weight: bold;
    line-height: 1;
`

const Name = styled.a `
    transition-property: color;
    transition-timing-function: linear;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    line-height: 1;
`

const BtnWrap = styled.div `
    padding-top: 7px;
    border: 0;
    font-size: 100%;
    margin-top: 10px;
    outline: 0;
    padding: 0;
    color: #fff;
    font-weight: bold;
    line-height: 1;
`

const BtnContainer = styled.div `
    display: inline-block;
    text-align: center;
`

const Btn = styled.a `
    font-size: 12px;
    padding: 4px 15px;
    margin-left: 0;
    margin-right: 0;
    background-color: #0057ff;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-weight: 600;
    line-height: 1.25;
    text-shadow: none;
    transition-duration: 300ms;
    transition-property: background, color, border;
    transition-timing-function: linear;
    user-select: none;
    vertical-align: top;
`

const Label = styled.span `
    color: inherit;
    display: inline-block;
    vertical-align: inherit;
    cursor: pointer;
    font-weight: 600;
    line-height: 1.25;
    text-shadow: none;
    user-select: none;
`

const ProjectWrap = styled.ul `
    cursor: grab;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 120px 50px 50px;
    text-align: left;
    white-space: nowrap;
    margin: 0;
    list-style: none;
    display: block;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
//margin-block-start: 1em;

const ScrollWrap = styled.div `
    position: relative;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    text-align: left;
    white-space: nowrap;
    cursor: grab;
`

const ScrollControl = styled.div `
    top: 114px;    
    left: -20px;
    background: #fff;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(25, 25, 25, 0.16);
    cursor: pointer;
    height: 40px;
    position: absolute;
    width: 40px;
    z-index: 2;
    fill: #959595;
`

const ScrollContainer = styled.div `
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    cursor: grab;
    text-align: left;
    white-space: nowrap;
`

const Container = styled.div `
    width: 3505px;
    height: 268px;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const ScrollerItem = styled.div `
    transform: translate3d(704px, 0px, 0px);
    width: 337px;
    display: inline-block;
    left: 0;
    position: absolute;
    top: 0;
`

const ProjectCover = styled.div `
    position: relative;
    display: inline-block;
    height: 100%;
    white-space: normal;
    width: 100%;
`

const CoverCover = styled.div `
    position: relative;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const CoverWrap = styled.div `
    border-radius: 4px;
    display: block;
    padding-top: 78.22%;
    position: relative;
    width: 100%;
    background-color: #f2f2f2;
`

const CoverContent = styled.div `
    border-radius: 4px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const DominantColor = styled.div `
    border-radius: inherit;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`

const Img = styled.img `
    will-change: auto;
    object-fit: cover;
    transition: opacity 0.15s linear;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    border-radius: 4px;
    display: block;
    overflow: hidden;

`