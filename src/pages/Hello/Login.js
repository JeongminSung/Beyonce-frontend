import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import LogoImg from "./LogoImg";
import LogoText from "./LogoText";
import LoginBox from "./LoginBox";
import styled from "styled-components";

const Login = (props) => {
  //const ImgNum = res.data.length;
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        setImg(
          res.data[`${Math.floor(Math.random() * res.data.length)}`].image
        );
      });
  }, []);

  return (
    <LoginWrap img={img}>
      <LogoWrap>
        <LogoImg />
        <LogoText />
      </LogoWrap>
      <BoxWrap>
        <LoginBox />
      </BoxWrap>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
`;
const LogoWrap = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  margin-left: 10%;
`;

const BoxWrap = styled.div`
  width: 35%;
  z-index: 4;
`;
//margin-top: 5%;
//margin-right: 15%;
