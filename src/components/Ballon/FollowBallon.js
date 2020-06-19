import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const FollowBallon = ({ fb, owner, data }) => {
  const [pimg, setImg] = useState();

  useEffect(() => {
    if (owner !== undefined) {
      setImg(owner.work_imgs);
    }
  });

  console.log("II :", pimg);
  return (
    <BallonWrap view={fb}>
      <PointerWrap>
        <Pointer></Pointer>
      </PointerWrap>
      <div>
        <div>
          <MiniProfile>
            <UserInfoWrap>
              <InfoContainer>
                <Avatar target="_blank" href="">
                  {!owner ? (
                    <AvatarImg src="" />
                  ) : (
                    <AvatarImg src={owner.profile_img} />
                  )}
                </Avatar>
                <AvatarInfo>
                  {!owner ? (
                    <Name target="_blank" href="">
                      Unknown
                    </Name>
                  ) : (
                    <Name target="_blank" href="">
                      {owner.fullname}
                    </Name>
                  )}
                  {!owner ? (
                    <City target="_blank" href=""></City>
                  ) : (
                    <City target="_blank" href="">
                      {owner.location}
                    </City>
                  )}
                </AvatarInfo>
              </InfoContainer>
              <ActionFollow>
                <FollowButton>
                  <FollowText>Follow</FollowText> {/*팔로잉, 팔로우 취소 필요*/}
                </FollowButton>
              </ActionFollow>
            </UserInfoWrap>
            <Project>
              {pimg !== undefined &&
                pimg.slice(0, 3).map((abc) => {
                  return (
                    <ImgWrap>
                      <Img src={abc} />
                    </ImgWrap>
                  );
                })}
            </Project>
            <Stat>
              <StatWrap>
                <svg
                  fill="#959595"
                  margin-right="5"
                  margin-top="2"
                  position="relative"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0.5 0.5 16 16"
                >
                  <path fill="none" d="M.5.5h16v16H.5z"></path>
                  <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
                </svg>
                <StatNum>{data.like}</StatNum>
              </StatWrap>
              <StatWrap>
                <svg
                  fill="#959595"
                  margin-right="5"
                  margin-top="2"
                  position="relative"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path fill="none" d="M.5.5h16v16H.5z"></path>
                  <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
                </svg>
                <StatNum>{data.view}</StatNum>
              </StatWrap>
            </Stat>
          </MiniProfile>
        </div>
      </div>
    </BallonWrap>
  );
};

export default FollowBallon;

const BallonWrap = styled.div`
  cursor: initial;
  padding: 0px;
  position: absolute;
  opacity: 0;
  top: 7%;
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
  transition: all 0.4s ease-in-out;
  ${(props) =>
    props.view &&
    css`
      opacity: 1;
      transition: all 0.4s ease-in-out;
    `}
`;

const PointerWrap = styled.div`
  right: 2px;
  margin-top: -6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Pointer = styled.div`
  border-color: transparent;
  border-style: solid;
  border-width: 7px;
  filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));
  height: 0;
  position: absolute;
  width: 0;
  border-top-color: #fff;
  transform: rotate(-90deg);
`;

const MiniProfile = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);
  font-family: inherit;
  padding: 12px;
  position: relative;
  width: 375px;
`;

const UserInfoWrap = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-family: inherit;
  color: #191919;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  width: calc(100% - 115px);
`;

const Avatar = styled.a`
  position: relative;
  background-color: #e8e8e8;
  border-radius: 50%;
  display: block;
  height: 35px;
  min-height: 35px;
  min-width: 35px;
  overflow: hidden;
  width: 35px;
  color: #0057ff;
  cursor: pointer;
  text-decoration: none;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  color: #0057ff;
  cursor: pointer;
`;

const AvatarInfo = styled.div`
  border: 0;
  font-size: 100%;
  outline: 0;
  padding: 0;
  font-family: inherit;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  margin-left: 10px;
`;

const Name = styled.a`
  transition-duration: 0.1s;
  transition-property: color;
  transition-timing-function: linear;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #191919;
  display: block;
  padding-top: 4px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
`;

const City = styled.a`
  transition-duration: 0.1s;
  transition-property: color;
  transition-timing-function: linear;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #191919;
  display: block;
  font-size: 12px;
  margin-top: -1px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
`;

const ActionFollow = styled.div`
  display: inline-block;
  text-align: center;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  background: #0057ff;
  color: #fff;
  line-height: 1.3;
  border-radius: 50px;
`;

const FollowButton = styled.a`
  margin-right: 0;
  font-size: 12px;
  padding: 4px 15px;
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
`;

const FollowText = styled.span`
  color: inherit;
  display: inline-block;
  vertical-align: inherit;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
`;

const Project = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  margin-top: 12px;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  font-family: inherit;
`;

const ImgWrap = styled.a`
  transition-duration: 0.1s;
  transition-property: color;
  transition-timing-function: linear;
  background: #f9f9f9;
  position: relative;
  width: 115px;
  height: 115px;
  color: #0057ff;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Stat = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  margin-top: 11px;
  border: 0;
  font-size: 100%;
  margin-top: 10px;
  outline: 0;
  padding: 0;
`;

const StatWrap = styled.span`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  margin-right: 11px;
  font-family: inherit;
  border: 0;
  margin-left: 10px;
  outline: 0;
  padding: 0;
  color: #191919;
`;

const StatNum = styled.span`
  margin-top: 2px;
  border: 0;
  font-size: 100%;
  margin-left: 4px;
  outline: 0;
  padding: 0;
  font-weight: bold;
  color: #191919;
  line-height: 1.3;
`;
