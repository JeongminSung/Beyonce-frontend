import React, { Component, useState, useEffect } from "react";
import SaveBallon from "../../components/Ballon/SaveBallon";
import ToolBallon from "../../components/Ballon/ToolBallon";
import FollowBallon from "../../components/Ballon/FollowBallon";
import styled from "styled-components";

const SectionRight = ({data, owner}) => {

  const [sb, setSb] = useState(false);
  const [tb, setTb] = useState(false);
  const [fb, setFb] = useState(false);

  console.log(sb)

  return (
    <>
      <RightWrap>
        <IconWrap onMouseOver={()=>setFb(true)} onMouseLeave={()=>setFb(false)}>
          <Imglink>
            <Img src={owner.profile_img} alt="작가얼굴" />
          </Imglink>
          <PlusIcon>
            <PlusLink>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.333 533.333"><path d="M516.7,200H333.3V16.7c0-9.2-7.5-16.7-16.7-16.7h-100C207.5,0,200,7.5,200,16.7V200H16.7C7.5,200,0,207.5,0,216.7v100
	c0,9.2,7.5,16.7,16.7,16.7H200v183.3c0,9.2,7.5,16.7,16.7,16.7h100c9.2,0,16.7-7.5,16.7-16.7V333.3h183.3c9.2,0,16.7-7.5,16.7-16.7
	v-100C533.3,207.5,525.9,200,516.7,200z"></path></svg>
            </PlusLink>
          </PlusIcon>
          <TextWrap>
            <Text>Follow</Text>
          </TextWrap>
        </IconWrap>
        <FollowBallon fb={fb} owner={owner} data={data}/>
        <IconWrap onMouseOver={()=>setTb(true)} onMouseLeave={()=>setTb(false)}>
          <Imglink>
            <ToolImg src={data.img_tool} alt="Tool" />
          </Imglink>
          <TextWrap>
            <Text>Tools</Text>
          </TextWrap>     
        </IconWrap>
        <ToolBallon tb={tb} owner={owner} data={data}/>
        <IconWrap onMouseOver={()=>setSb(true)} onMouseLeave={()=>setSb(false)}>
          <Imglink>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" class="Collection-icon-1ub Project-icon-29I"><path d="M5.69,3.395,7.97,5.487h6.217V7.579H2.858V3.743a.351.351,0,0,1,.354-.349ZM5.69,2H3.212a1.757,1.757,0,0,0-1.77,1.743V7.579h-1a.356.356,0,0,0-.27.123A.345.345,0,0,0,.1,7.985L1.336,14.68a.705.705,0,0,0,.7.572H15.012a.705.705,0,0,0,.7-.572L16.95,7.985a.345.345,0,0,0-.079-.283.356.356,0,0,0-.27-.123h-1V4.789a.7.7,0,0,0-.708-.7H8.523L6.859,2.514A1.657,1.657,0,0,0,5.69,2Z" transform="translate(-0.023 -0.5)"></path></svg>
          </Imglink>
          <TextWrap >
            <Text>Save</Text>
          </TextWrap>
        </IconWrap>
        <SaveBallon sb={sb}/>
        <IconWrap>
          <LImglink>
          <svg xmlns="http://www.w3.org/2000/svg" fill= "#fff" width="16" height="16" viewBox="0.5 0.5 16 16" class="Appreciations-icon-2NG Appreciate-icon-2yw Project-toolsSidebarAppreciateThumb-2j6"><path fill="none" d="M.5.5h16v16H.5z"></path><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path></svg>
          </LImglink>
          <TextWrap>
            <Text>Like</Text>
          </TextWrap>
        </IconWrap>
      </RightWrap>
    </>
  );
};

//
export default SectionRight;

const RightWrap = styled.div`
    top: 143px;
    margin-left: 25px;
    margin-right: -50px;
    position: sticky;
    transform: translateX(20px);
    transition: opacity 0.15s linear;
    will-change: opacity;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    color: #2b2b2b;
    line-height: 1.3;
    z-index: 10;
`;
//width: 45px;

const IconWrap = styled.div`
    align-self: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: -6px;
    padding-bottom: 6px;
    position: relative;
    cursor: pointer;
    &:hover {
    filter: brightness(70%);
    transition: all 0.3s ease-in-out;
  }
`;

const Imglink = styled.a `
    height: 45px;
    width: 45px;
    min-height: 45px;
    min-width: 45px;
    backface-visibility: hidden;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: content-box !important;
    display: block;
    line-height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img `
    border-radius: inherit;
    display: block;
    width: 100%;
    height: 100%;
`
const PlusIcon = styled.div `
    top: 32px;
    bottom: 3px;
    position: absolute;
    right: 0;
    display: block;
    padding-bottom: 2px;
`
const PlusLink = styled.a `
    -webkit-box-align: center;
    align-items: center;
    background: #0057ff;
    border-radius: 50%;
    display: flex;
    height: 16px;
    -webkit-box-pack: center;
    justify-content: center;
    width: 16px;
    color: #0057ff;
    cursor: pointer;
    text-decoration: none;
    fill: #fff;
`

const TextWrap = styled.div `
    margin-top: 13px;
    color: #959595;
    cursor: pointer;
    display: flex;
    font-size: 11px;
    font-weight: bold;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 25px;
    pointer-events: all;
    text-align: center;
`

const Text = styled.label `
    font-weight: bold;
    color: #959595;
`
const ToolImg = styled.img `
    padding: 12px;
    display: block;
    width: 100%;
    height: 100%;
`

const LImglink = styled.div `
    height: 45px;
    width: 45px;
    min-height: 45px;
    min-width: 45px;
    backface-visibility: hidden;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: content-box !important;
    display: block;
    line-height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0057ff;
`
