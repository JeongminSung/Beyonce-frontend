import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";


const ContentsSlide = ({owner}) => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ data, setData ] = useState([])
    const [ positionX, setPositionX] = useState(0);

    /*
    useEffect (() => {
        fetch("http://localhost:3000/data/data.json")
            .then((res) => res.json())
            .then((res) => {
                setData(res.data)
            })
    }, [])
*/  

    useEffect(() => {
        if(owner !== undefined){
        setData(owner.work_imgs)
    }})

    
    console.log("CS :", data)
    const nextSlide = () => {
        let TOTAL_SLIDES = data.length;
        {/*if ( currentSlide >= TOTAL_SLIDES - 1) {*/}
           if ( currentSlide >= `${Math.round(TOTAL_SLIDES/3)}`-1){
            return;
        } else {
            setCurrentSlide(currentSlide + 1);
            {/*setPositionX(positionX - 352)*/}
            setPositionX(positionX - 100); 
        }
    }

    const prevSlide = () => {
        let TOTAL_SLIDES = data.length;
        if ( currentSlide === 0 ) {
            return;
        } else {
            setCurrentSlide( currentSlide - 1 );
            {/*setPositionX(positionX + 352); */}
            setPositionX(positionX + 100)
        }
    }

    return (
       <Container>
           
           <SlideContainer style={{
                transform : `translateX(${positionX}%)`,
                transition : "all 0.5s ease-in-out"         
           }}>
             <Slide data = { data } />
           </SlideContainer>
           <PButton onClick={prevSlide}>
           <svg transform="rotate(-90deg)" fill="#959595" height="16" left="16" position="absolute" top="12"
            width="10" x="0px" y="0px" viewBox="0 0 11.92 17.66"><path d="M0,3.09l5.74,5.74L0,14.57l3.09,3.09l8.83-8.83L3.09,0L0,3.09z"></path></svg>
           </PButton>
           <NButton onClick={nextSlide}>
           <svg fill="#959595" height="16" left="16" position="absolute" top="12" 
            width="10" x="0px" y="0px" viewBox="0 0 11.92 17.66"><path d="M0,3.09l5.74,5.74L0,14.57l3.09,3.09l8.83-8.83L3.09,0L0,3.09z"></path></svg>
           </NButton>
        
       </Container>
    )
}

export default ContentsSlide;

const Container = styled.div`
  width: 100%;
  overflow: hidden; 
`;

/*
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
*/

const PButton = styled.button `
    background: #fff;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(25, 25, 25, 0.16);
    cursor: pointer;
    height: 40px;
    position: absolute;
    width: 40px;
    z-index: 2;
    fill: #959595;
    top: 160px;
    transform: rotateY(180deg);
`

const NButton = styled.button `
    background: #fff;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(25, 25, 25, 0.16);
    cursor: pointer;
    height: 40px;
    position: absolute;
    width: 40px;
    z-index: 2;
    fill: #959595;
    top: 160px;
    left: 98.5%;
`

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`;