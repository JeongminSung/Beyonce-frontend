import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";


const ToolBallon = ({tb, data, owner}) => {
  
    const [tool, setTool] = useState()

    useEffect(() => {
      if(data !== undefined){
        setTool(data.img_tool)
      }
    })

    return(
        <BallonWrap view={tb}>
          <PointerWrap>
            <Pointer></Pointer>
          </PointerWrap>
          <Text>TOOLS</Text>
          {tool !==undefined && tool.map((abc)=>{
            return(
              <ToolWrap>
                <ToolImg src={abc} />
              </ToolWrap>
            )
          })}
        </BallonWrap>
    )
}

export default ToolBallon;

const BallonWrap = styled.div `
    cursor: initial;
    padding: 20px;
    opacity: 0;
    position: absolute;
    top: 30%;
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
    width: 220px;
    transition: all 0.4s ease-in-out;
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
    color: #959595;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
`

const ToolWrap = styled.a `
    display: inline-block;
    margin-right: 5px;
    margin-top: 19px;
`

const ToolImg = styled.img `
    height: 31px;
    overflow: hidden;
    vertical-align: top;
    width: 31px;
`