import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

//window.Kakao.init("82cf7f6d0018709360917a198e3ec3f7");

const LoginBox = ({ history }) => {
  const [token, setToken] = useState("")

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        //setToken(authObj.access_token) 비동기로, 이를 사용하면 바로 이동하지 못함.
        fetch("http://10.58.4.193:8000/user/social_login", {
          method: "POST",
          headers: {
            "Authorization": authObj.access_token
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.token) {
              localStorage.setItem("Login-token", res.token);
              alert("로그인 되었습니다.");
              history.push("/");
            } else {
              alert("다시 확인해주세요.")
            }
          })
      },
      fail: function (err) {
        console.log("에러", err);
      },
    })
  };

  return (
    <LoginBoxWrap>
      <Header>
        <Title>로그인</Title>
        <GotoSign>
          신규 사용자이신가요?<MakeAccount> 계정만들기</MakeAccount>
        </GotoSign>
      </Header>
      <Section>
        <SocialLogin onClick={loginWithKakao}>
          {/*<svg
            viewBox="0 0 1152 1152"
            focusable="false"
            aria-hidden="true"
            role="img"
            width="15"
            height="15"
          >
            <path
              d="M1055.994 594.42a559.973 559.973 0 0 0-8.86-99.684h-458.99V683.25h262.28c-11.298 60.918-45.633 112.532-97.248 147.089v122.279h157.501c92.152-84.842 145.317-209.78 145.317-358.198z"
              fill="#4285f4"
            ></path>
            <path
              d="M588.144 1070.688c131.583 0 241.9-43.64 322.533-118.07l-157.5-122.28c-43.64 29.241-99.463 46.52-165.033 46.52-126.931 0-234.368-85.728-272.691-200.919H152.636v126.267c80.19 159.273 245 268.482 435.508 268.482z"
              fill="#34a853"
            ></path>
            <path
              d="M315.453 675.94a288.113 288.113 0 0 1 0-185.191V364.482H152.636a487.96 487.96 0 0 0 0 437.724z"
              fill="#fbbc05"
            ></path>
            <path
              d="M588.144 289.83c71.551 0 135.792 24.589 186.298 72.88l139.78-139.779C829.821 144.291 719.504 96 588.143 96c-190.507 0-355.318 109.21-435.508 268.482L315.453 490.75c38.323-115.19 145.76-200.919 272.691-200.919z"
              fill="#ea4335"
            ></path>
          </svg>*/}
          카카오로 계속
        </SocialLogin>
        {/*<button>KaKao로 계속</button>*/}
      </Section>
      <Footer>
        <PInfo>
          reCAPTCHA로 보호되며 Google <Point>개인정보보호 정책</Point> 및{" "}
          <Point>서비스 약관</Point>의 적용을 받습니다.
        </PInfo>
      </Footer>
    </LoginBoxWrap>
  );
};

export default withRouter(LoginBox);

//const Google = styled.svg``;

//color: ${(props) => props.theme.colors.LiginGray}

const LoginBoxWrap = styled.div`
  background-color: #ffffff;
  padding: 40px 56px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.loginDarkGray};
`;
// LoginBoxWrap : min-height: 630px;

const Header = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  font-style: normal;
  letter-spacing: 0.05em;
  text-transform: none;
  margin-bottom: 8px;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.loginBlack};
`;

const GotoSign = styled.p`
  color: ${(props) => props.theme.colors.loginDarkGray};
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  margin: 8px 0 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const MakeAccount = styled.span`
  color: ${(props) => props.theme.colors.loginBlue};
`;
const Section = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;
const SocialLogin = styled.button`
  display: block;
  border-radius: 100px;
  border-width: 2px;
  color: ${(props) => props.theme.colors.loginDarkGray};
  font-weight: 900;
  font-size: 15px;
  height: auto;
  text-align: center;
  padding: 15px;
  min-height: 56px;
  background-color: #fff;
  border-color: #eaeaea;
  -webkit-appearance: none;
  min-width: 32px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.loginDarkGray};
`;
const PInfo = styled.p`
  color: ${(props) => props.theme.colors.loginLightGray};
  font-size: 12px;
  padding-top: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
`;

const Point = styled.span`
  color: ${(props) => props.theme.colors.loginBlue};
`;
