import React from "react";
import styled, { css } from "styled-components";


const SaveBallon = (props) => {
  console.log("pp :", props)
    return(
        <BallonWrap view={props.sb}>
          <PointerWrap>
            <Pointer></Pointer>
          </PointerWrap>
          <Text>Add to Moodboard</Text>
        </BallonWrap>
    )
}

export default SaveBallon;

const BallonWrap = styled.div `
    cursor: initial;
    opacity: 0;
    padding: 10px 19px;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    margin-top: -3px;
    right: calc(100% + 7px);
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(25, 25, 25, 0.3);
    color: #191919;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 100;
    width: 150px;
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    ${props => props.view && css`
    opacity: 1;
    transition: all 0.4s ease-in-out;
  `}
`

const PointerWrap = styled.div `
    right: 2px;
    margin-top: -6px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

const Pointer = styled.div `
    border-color: transparent;
    border-style: solid;
    border-width: 7px;
    filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));
    height: 0;
    position: absolute;
    width: 0;
    border-top-color: #fff;
    transform: rotate(-90deg);
`

const Text = styled.div `
    font-size: 13px;
    font-weight: bold;
    white-space: nowrap;
    text-align: center;
    margin: 0 auto;
`