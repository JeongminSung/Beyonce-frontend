import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
   return (
      <Wrap>
        <ProfileHeader>
          <AvatarContainer>
            <Imglink>
              <Img src="https://mir-s3-cdn-cf.behance.net/user/115/533432.53aee1f322054.jpg" alt="작가얼굴" />
            </Imglink>
            <PlusIcon>
              <PlusLink>
              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.333 533.333"><path d="M516.7,200H333.3V16.7c0-9.2-7.5-16.7-16.7-16.7h-100C207.5,0,200,7.5,200,16.7V200H16.7C7.5,200,0,207.5,0,216.7v100
	c0,9.2  ,7.5,16.7,16.7,16.7H200v183.3c0,9.2,7.5,16.7,16.7,16.7h100c9.2,0,16.7-7.5,16.7-16.7V333.3h183.3c9.2,0,16.7-7.5,16.7-16.7
	v-100C  533.3,207.5,525.9,200,516.7,200z"></path></svg>
              </PlusLink>
            </PlusIcon>
          </AvatarContainer>
        </ProfileHeader>
      </Wrap>
   )
}

export default Sidebar;

const Wrap = styled.div `
    padding: 25px 30px 16px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
    width: 360px;
    position: relative;
    z-index: 10;
    background-color: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.25s linear;
`

const ProfileHeader = styled.div `
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const AvatarContainer = styled.div `
    height: 118px;
    width: 118px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 2px;
    position: relative;
    transition: margin-top 0.65s cubic-bezier(0.19, 1, 0.22, 1);
`

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