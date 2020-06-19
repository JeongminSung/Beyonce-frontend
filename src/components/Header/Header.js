import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

function Header({ history }) {
  const token = localStorage.getItem("Login-token");

  return (
    <HeaderBlock>
      <HeaderLogo
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 152.5 28.2"
        width="85"
        height="18"
        onClick={() => history.push("/")}
      >
        <path d="M13.1 0c1.3 0 2.5.1 3.6.4 1.1.2 2 .6 2.8 1.1.8.5 1.4 1.2 1.8 2.1.4.9.6 2 .6 3.2 0 1.4-.3 2.6-1 3.5-.6.9-1.6 1.7-2.8 2.3 1.7.5 3 1.4 3.8 2.6.8 1.2 1.3 2.7 1.3 4.4 0 1.4-.3 2.6-.8 3.6s-1.3 1.9-2.2 2.5c-.9.6-2 1.1-3.2 1.4-1.2.3-2.4.5-3.6.5H0V0h13.1zm-.8 11.2c1.1 0 2-.3 2.7-.8.7-.5 1-1.4 1-2.5 0-.6-.1-1.2-.3-1.6-.2-.4-.5-.7-.9-1-.4-.2-.8-.4-1.3-.5-.5-.1-1-.1-1.6-.1H6.1v6.5h6.2zm.3 11.8c.6 0 1.2-.1 1.7-.2s1-.3 1.4-.6c.4-.3.7-.6 1-1.1.2-.5.4-1.1.4-1.8 0-1.4-.4-2.4-1.2-3.1-.8-.6-1.9-.9-3.2-.9H6.1V23h6.5zM31.9 22.9c.8.8 2 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.9c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.6-.8 4.2-.8 1.7 0 3.2.3 4.5 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.2 1.4.3 2.8.2 4.4H30.5c0 1.6.6 3.1 1.4 3.9zm6.3-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1 .7-1.4 1.1-.4.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.2-1.5-.7-2.5-1.4-3.2zM52.8 0v10.4h.1c.7-1.2 1.6-2 2.7-2.5s2.1-.8 3.2-.8c1.5 0 2.7.2 3.6.6.9.4 1.7 1 2.2 1.7.5.7.9 1.6 1.1 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.2-2.7-1.2-1.5 0-2.6.5-3.2 1.3-.7.9-1 2.4-1 4.4v10.5h-5.5V0h5.5zM70 10.6c.6-.9 1.3-1.5 2.2-2.1.9-.5 1.9-.9 3-1.1 1.1-.2 2.2-.3 3.3-.3 1 0 2 .1 3.1.2 1 .1 2 .4 2.8.8.9.4 1.5 1 2.1 1.7.5.7.8 1.7.8 2.9v10.5c0 .9.1 1.8.2 2.6s.4 1.5.7 1.9h-5.6c-.2-.2-.3-.6-.4-.9-.1-.3-.1-.7-.1-1-.9.9-1.9 1.5-3.1 1.9-1.2.4-2.4.5-3.6.5-1 0-1.8-.1-2.7-.4-.8-.2-1.5-.6-2.2-1.1-.6-.5-1.1-1.1-1.5-1.9-.3-.8-.5-1.6-.5-2.7s.2-2.1.6-2.8c.4-.7.9-1.3 1.5-1.8.6-.4 1.4-.8 2.2-1 .8-.2 1.6-.4 2.5-.5l2.4-.3c.8-.1 1.5-.2 2.1-.3.6-.2 1.1-.4 1.5-.7.4-.3.5-.7.5-1.3 0-.6-.1-1.1-.3-1.4-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-1.1 0-1.9.2-2.5.7-.6.5-1 1.3-1.1 2.3h-5.5c0-1.2.4-2.3.9-3.1zm10.9 7.8c-.3.1-.7.2-1.1.3-.4.1-.8.1-1.3.2-.4.1-.9.1-1.3.2l-1.2.3c-.4.1-.8.3-1 .5-.3.2-.5.5-.7.8-.3.4-.3.8-.3 1.3s.1.9.3 1.2c.2.3.4.6.7.8.3.2.7.3 1.1.4.4.1.8.1 1.3.1 1.1 0 1.9-.2 2.5-.5.6-.4 1-.8 1.3-1.3.3-.5.5-1 .5-1.5.1-.5.1-.9.1-1.2v-2.1c-.3.2-.6.4-.9.5zM95.6 7.6v2.8h.1c.7-1.2 1.6-2 2.7-2.5s2.3-.8 3.4-.8c1.5 0 2.7.2 3.6.6 1 .4 1.7 1 2.2 1.7.5.7.9 1.6 1.2 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.3-2.8-1.3-1.5 0-2.6.6-3.3 1.5-.7.9-1 2.4-1 4.4v10.5h-5.5V7.6h5.4zM121.4 11.2c-.9 0-1.6.2-2.2.6-.6.4-1.1.9-1.5 1.6-.4.6-.6 1.3-.8 2.1-.2.8-.2 1.5-.2 2.3 0 .7.1 1.5.2 2.2.2.8.4 1.4.8 2 .4.6.8 1.1 1.4 1.5.6.4 1.3.6 2.2.6 1.3 0 2.3-.4 3.1-1.1.7-.7 1.2-1.7 1.3-3h5.3c-.4 2.7-1.4 4.7-3.1 6.1-1.7 1.4-3.9 2.1-6.6 2.1-1.5 0-2.9-.3-4.1-.8-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.3-.7-2.6-.7-4.1 0-1.6.2-3 .7-4.3.5-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.2-2.3 1.3-.5 2.7-.8 4.3-.8 1.2 0 2.3.2 3.4.5s2.1.8 2.9 1.4c.9.6 1.6 1.4 2.1 2.4.5.9.8 2.1.9 3.4h-5.4c-.2-2.4-1.5-3.6-3.9-3.6zM29.4 1.9h11.2v2.7H29.4zM139.3 22.9c.8.8 2.1 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.8c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.2.3 4.4 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.4 1.4.5 2.9.4 4.5h-14.5c0 1.5.6 3 1.4 3.8zm6.4-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1.1.7-1.4 1.1-.3.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.3-1.5-.8-2.5-1.4-3.2z"></path>
      </HeaderLogo>
      <MainMenuBox>
        {token ? (
          <>
            <MainMenus onClick={() => history.push("/for_you")}>
              For You
            </MainMenus>
            <MainMenus onClick={() => history.push("/")}>Discover</MainMenus>
            <MainMenus onClick={() => history.push("/유저네임")}>
              Profile
            </MainMenus>
            <MainMenus
              onClick={() =>
                history.push("/portfolio/editor?tracking_source=portfolio")
              }
            >
              <Button text="Create a Project" />
            </MainMenus>
          </>
        ) : (
          <>
            <MainMenus
              onClick={() =>
                history.push("/portfolio/editor?tracking_source=portfolio")
              }
            >
              <Button
                text="Sign Up With Email"
                onClick={() => history.push("/login")}
              />
            </MainMenus>
            <NotLogin>or</NotLogin>
            <NotLoginFbBtn onClick={() => history.push("/login")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.311"
                height="16"
                viewBox="3200 170 8.311 16"
              >
                <path
                  d="m5.395 16v-7.3h2.45l0.367-2.846h-2.817v-1.815c0-0.826 0.226-1.384 1.412-1.384h1.5v-2.542a19.964 19.964 0 0 0 -2.192 -0.113 3.425 3.425 0 0 0 -3.658 3.756v2.1h-2.457v2.844h2.457v7.3z"
                  transform="translate(3200 170)"
                ></path>
              </svg>
            </NotLoginFbBtn>
            <NotLoginBtn onClick={() => history.push("/login")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 1000 1187.198"
              >
                <defs></defs>
                <path d="M979.04184 925.18785c-17.95397 41.47737-39.20563 79.65705-63.82824 114.75895-33.56298 47.8528-61.04356 80.9761-82.22194 99.3698-32.83013 30.192-68.00529 45.6544-105.67203 46.5338-27.04089 0-59.6512-7.6946-97.61105-23.3035-38.08442-15.5358-73.08371-23.2303-105.08578-23.2303-33.56296 0-69.55888 7.6945-108.06101 23.2303-38.5608 15.6089-69.62484 23.7432-93.37541 24.5493-36.12049 1.5389-72.1237-14.3632-108.06101-47.7796-22.93711-20.0059-51.62684-54.3017-85.99592-102.8874-36.875274-51.88328-67.191862-112.04745-90.942422-180.639C12.750995 781.70252 0 709.95986 0 640.50361c0-79.5618 17.191859-148.18267 51.626869-205.68673 27.062885-46.18935 63.066121-82.62496 108.126941-109.37275 45.06086-26.74775 93.74914-40.37812 146.18212-41.25019 28.68971 0 66.3125 8.8744 113.06613 26.31542 46.62174 17.49964 76.55727 26.37404 89.68198 26.37404 9.8124 0 43.06758-10.37669 99.4431-31.06405 53.31237-19.18512 98.30724-27.12887 135.16787-23.99975 99.8828 8.06098 174.92313 47.43518 224.82789 118.37174-89.33023 54.12578-133.51903 129.93556-132.63966 227.18753.8061 75.75115 28.28668 138.78795 82.2952 188.8393 24.47603 23.23022 51.81008 41.18421 82.22186 53.93522-6.59525 19.12648-13.557 37.44688-20.95846 55.03446zM749.96366 23.751237c0 59.37343-21.69138 114.810233-64.92748 166.121963-52.17652 60.99961-115.28658 96.24803-183.72426 90.68597-.87204-7.12298-1.37769-14.61967-1.37769-22.49743 0-56.99843 24.81315-117.99801 68.87738-167.873453 21.99909-25.25281 49.978-46.25018 83.90738-63.00018 33.85608-16.50008 65.88014-25.62498 95.99884-27.18758.87944 7.9373 1.24583 15.8751 1.24583 23.74994z"></path>
              </svg>
            </NotLoginBtn>
            <NotLoginKakaoBtn onClick={() => history.push("/login")}>
              <svg
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z"
                  fill="#3e2723"
                />
                <g fill="#ffeb3b">
                  <path d="m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z" />
                  <path d="m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z" />
                  <path d="m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z" />
                  <path d="m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z" />
                </g>
              </svg>
            </NotLoginKakaoBtn>
          </>
        )}
      </MainMenuBox>
      <SubMenuBox>
        <SubMenus>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5605.991 836 16.958 16.95"
            width="16"
            height="16"
          >
            <path
              data-name="Path 150"
              d="M5612.5 836a6.493 6.493 0 0 1 5.29 10.27l4.88 4.88a1.076 1.076 0 0 1-1.52 1.52l-4.88-4.88a6.5 6.5 0 1 1-3.77-11.79zm0 11a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5z"
            ></path>
          </svg>
          <SerchTooltipBox onClick={() => history.push("/search")}>
            <Pointer />
            <SerchTooltip>Search and Filter</SerchTooltip>
          </SerchTooltipBox>
        </SubMenus>
        {token ? (
          <>
            <SubMenus>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5673 837 16 16"
                width="16"
                height="16"
              >
                <g>
                  <path d="M5680.86 846.605a.18.18 0 0 0 .21 0l7.86-5.764v-.46a.7.7 0 0 0-.724-.662h-14.482a.7.7 0 0 0-.724.663v.46z"></path>
                  <path d="M5688.93 842.426l-4.378 3.21 4.38 2.41z"></path>
                  <path d="M5683.428 846.46l-1.514 1.11a1.663 1.663 0 0 1-1.9 0l-1.514-1.116-5.5 3.032v.85a.7.7 0 0 0 .724.665h14.482a.7.7 0 0 0 .724-.663v-.85z"></path>
                  <path d="M5677.372 845.63l-4.372-3.205v5.618z"></path>
                </g>
              </svg>
            </SubMenus>
            <SubMenus>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="5641 835.999 14 17.001"
              >
                <g>
                  <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"></path>
                  <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"></path>
                  <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z"></path>
                  <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z"></path>
                </g>
              </svg>
            </SubMenus>
            <SubMenus onClick={() => history.push("/유저네임")}>
              <Profile src="https://mir-s3-cdn-cf.behance.net/user/115/38937534127641.57320518da535.jpg"></Profile>
            </SubMenus>
            <SubMenus>
              <svg
                viewBox="0 0 36 36"
                focusable="false"
                aria-hidden="true"
                role="img"
                width="18"
                height="18"
              >
                <path d="M10 10H2V3a1 1 0 0 1 1-1h7zm4-8h8v8h-8zm20 8h-8V2h7a1 1 0 0 1 1 1zM2 14h8v8H2zm12 0h8v8h-8zm12 0h8v8h-8zM10 34H3a1 1 0 0 1-1-1v-7h8zm4-8h8v8h-8zm19 8h-7v-8h8v7a1 1 0 0 1-1 1z"></path>
              </svg>
            </SubMenus>
          </>
        ) : (
          <SubMenus onClick={() => history.push("/login")}>Sign In</SubMenus>
        )}
        <SubMenus>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5749.5 837 70 16"
            width="70"
            height="16"
          >
            <path d="M5761.6 837h7.1v16zm-5 0h-7.1v16zm2.5 5.9l4.5 10.1h-3l-1.3-3.2h-3.3zm19.4 3.9l-1.2 3.3a.1.1 0 0 1-.1.1h-1.1a.1.1 0 0 1-.1-.1c1-2.5 2.6-6.9 3.7-9.7.1-.1.1-.3.1-.7 0-.1 0-.1.1-.1h1.6c.1 0 .1 0 .1.1 1.3 3.4 2.6 7 3.9 10.4 0 .1 0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1l-1.3-3.4zm3.8-1.2c-.4-1-1.3-3.8-1.7-4.9-.3 1-1.1 3.1-1.6 4.9zm3.9.8a4.076 4.076 0 0 1 4.4-4.1 2.745 2.745 0 0 1 1.3.2v-3.7c0-.1 0-.1.1-.1h1.3c.1 0 .1 0 .1.1v10.7c0 .1 0 .1-.1.2a6.736 6.736 0 0 1-3 .8c-2.4-.1-4.1-1.5-4.1-4.1zm5.7-2.8a2.55 2.55 0 0 0-1.3-.2 2.73 2.73 0 0 0-2.9 2.9c0 2.2 1.3 2.9 2.7 2.9a4.636 4.636 0 0 0 1.4-.2zm10.7 2.7a3.9 3.9 0 1 1-7.8 0 3.7 3.7 0 0 1 3.9-4 3.65 3.65 0 0 1 3.9 4zm-6.2 0c0 1.7.9 3 2.5 3 1.2 0 2.3-.8 2.3-2.9 0-1.6-.7-3-2.4-3-1.4-.1-2.4 1-2.4 2.9zm9.2-7.6l.1 4a4.92 4.92 0 0 1 2-.5 3.49 3.49 0 0 1 3.6 3.7 4.357 4.357 0 0 1-4.6 4.4 5.867 5.867 0 0 1-2.3-.4c-.1 0-.1-.1-.1-.2v-11c0-.1 0-.1.1-.1l1.2.1zm1.8 4.7a2.86 2.86 0 0 0-1.7.4v5.3a4.87 4.87 0 0 0 1.2.1 2.99 2.99 0 0 0 3-3.2 2.34 2.34 0 0 0-2.5-2.6zm6.7 3a2.47 2.47 0 0 0 2.7 2.7 3.72 3.72 0 0 0 2-.5c.1 0 .1 0 .1.1v.9c0 .1 0 .1-.1.2a4.9 4.9 0 0 1-2.3.5c-2.9 0-3.9-2-3.9-4 0-2.4 1.3-4 3.7-4a3.058 3.058 0 0 1 3.2 3.1 3.14 3.14 0 0 1-.1.9 7.156 7.156 0 0 1-1.7.1zm3-.8a2.768 2.768 0 0 0 1-.1v-.3a1.863 1.863 0 0 0-1.9-1.9c-1.3 0-2 1-2.1 2.3h3z"></path>
          </svg>
        </SubMenus>
      </SubMenuBox>
    </HeaderBlock>
  );
}

// Styled-Components

const HeaderBlock = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.mainBlack};
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
`;

const HeaderLogo = styled.svg`
  fill: #fff;
  height: 56px;
  cursor: pointer;
`;

const MainMenuBox = styled.ul`
  height: 60px;
  display: flex;
  margin-left: 7%;
  align-items: center;
  position: relative;
`;

const MainMenus = styled.li`
  color: ${(props) => props.theme.colors.iconGray};
  padding: 10px 12px;
  cursor: poiner;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  list-style: none;
  &:hover {
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;

const NotLogin = styled(MainMenus)`
  margin: 0;
  padding: 0;
  font-size: 11px;
  font-weight: 500;
`;

const NotLoginBtn = styled(NotLogin)`
  position: relative;
  text-align: center;
  background-color: #fff;
  fill: ${(props) => props.theme.colors.mainBlack};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 10px;
  padding-bottom: 3px;
  transition: all 0.4s ease-in-out;
  &:hover {
    filter: brightness(70%);
    transition: all 0.3s ease-in-out;
  }
`;

const NotLoginKakaoBtn = styled(NotLoginBtn)`
  background-color: #ffe812;
  padding: 0;
`;

const NotLoginFbBtn = styled(NotLoginBtn)`
  background-color: #3b5998;
  fill: #fff;
  padding-top: 2px;
`;

const SubMenuBox = styled.ul`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SubMenus = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 8px 8px;
  fill: ${(props) => props.theme.colors.iconGray};
  color: ${(props) => props.theme.colors.iconGray};
  font-size: 14px;
  font-weight: 600;

  &:hover {
    fill: #fff;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }

  &:first-child:hover {
    & > div {
      visibility: visible;
      opacity: 1;
      transition: visibility 0.25s linear, opacity 0.25s linear;
    }
  }

  &:nth-child(5) {
    margin: 0 5px;
  }
  &:last-child {
    padding-right: 0;
  }
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const SerchTooltipBox = styled.div`
  opacity: 0;
  z-index: 10;
  visibility: hidden;
  color: ${(props) => props.theme.colors.mainGray};
  transform: translateX(-50%);
  transition: visibility 0.25s linear, opacity 0.25s linear;
  background-color: #fff;
  top: 90%;
  left: 6%;
  position: absolute;
  border-radius: 3px;
  font-weight: 600;
`;

const Pointer = styled.div`
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: calc(6px + 2px) solid #fff;
  border-top: 0;
  filter: drop-shadow(0 -2px 1px rgba(25, 25, 25, 0.1));
  transform: translateX(-50%);
  width: 0;
  position: absolute;
  top: -8px;
  right: auto;
  left: 50%;
`;

const SerchTooltip = styled.div`
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.3);
  padding: 10px 10px 8px 10px;
  text-align: center;
  white-space: nowrap;
`;
export default withRouter(Header);
