import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import BlueButton from "../../Button/Button";

const MainArticles = ({ history, clickFilter, match }) => {
  const [titles, setTitles] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hoverId, setHoverId] = useState(0);
  const LIMIT = 12;

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getFilterData();
  }, [clickFilter]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
      return;
    }
  };

  useEffect(() => {
    if (isFetching && offset < 157) {
      setOffset(LIMIT + offset);
      getData();
    } else {
      return;
    }
  }, [isFetching]);

  const getData = async () => {
    console.log("articleList", articleList);
    const response = await fetch(
      `http://10.58.3.78:8000/feed/main/37?limit=${LIMIT}&offset=${offset}`
    );
    const list = await response.json();

    setArticleList([...articleList, ...list.data.feeds]);
    setTitles(list.data);
    setIsFetching(false);
  };

  const getFilterData = async () => {
    console.log("articleList", articleList);
    const response = await fetch(
      `http://10.58.3.78:8000/feed/main/${clickFilter}?limit=${LIMIT}&offset=${offset}`
    );
    const list = await response.json();
    setOffset(0);
    setArticleList(list.data.feeds);
    setTitles(list.data);
    setIsFetching(false);
  };

  const boxEnter = (idx) => {
    setHoverId(idx);
  };

  return (
    <>
      {/* {console.log(
        "link",
        `http://10.58.3.78:8000/feed/main/${clickFilter}?limit=${LIMIT}&offset=${offset}`
      )} */}
      <ListTitleBlock>
        <ListTitleBox>
          <ListTitle>{titles.field}</ListTitle>
          <ListDesc>{titles.description}</ListDesc>
          <ButtonBox>
            <ButtonStyleBox>
              {titles.field === "Best of Behance" ? null : (
                <BlueButton text={`Follow ${titles.field}`} />
              )}
            </ButtonStyleBox>
          </ButtonBox>
        </ListTitleBox>
      </ListTitleBlock>
      <MainArticlesBlock>
        {articleList.length > 0 &&
          articleList.map((el, idx) => (
            <ArticleBox key={idx} onMouseEnter={() => boxEnter(el.id)}>
              <ArticleLists>
                <ArticleListsBox
                  background={el.background}
                  onClick={() => history.push(`/contents/${hoverId}`)}
                >
                  <ImgOverlay>
                    <ProjectTitle>{el.title}</ProjectTitle>
                  </ImgOverlay>
                  <ArticleImg src={el.cover_img} />
                </ArticleListsBox>
                <ArticleSubBox>
                  <ArticleProfileBox>
                    {!el.owners ? null : el.owners && el.owners.length === 1 ? (
                      <>
                        <ProfileImg src={el.owners[0].profile_img} />
                        <ProfileName>{el.owners[0].name}</ProfileName>
                      </>
                    ) : el.owners.length !== 0 && el.owners.length > 1 ? (
                      <>
                        <ProfileName>Multiple Owners</ProfileName>
                        <span
                          className="material-icons"
                          style={{ fontSize: "17px" }}
                        >
                          arrow_drop_down
                        </span>
                        <ManyOwnersDiv>
                          <Pointer />
                          <OwnersTip>
                            {el.owners.map((pro, idx) => (
                              <OwnersBox key={idx}>
                                <ProfileImg2 src={pro.profile_img} />
                                <ProfileName2>{pro.name}</ProfileName2>
                              </OwnersBox>
                            ))}
                          </OwnersTip>
                        </ManyOwnersDiv>
                      </>
                    ) : (
                      <>
                        <ProfileImg src={""} />
                        <ProfileName>{el.name}</ProfileName>
                      </>
                    )}
                  </ArticleProfileBox>
                  <LikeViewBox>
                    <LickViewWrapper>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0.5 0.5 16 16"
                      >
                        <path fill="none" d="M.5.5h16v16H.5z"></path>
                        <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
                      </svg>
                      {Number(el.like) <= 1000 ? (
                        <LikeViewText>{Number(el.like)}</LikeViewText>
                      ) : (
                        <LikeViewText>
                          {(Number(el.like) / 1000).toFixed(0) + "k"}
                        </LikeViewText>
                      )}
                    </LickViewWrapper>
                    <LickViewWrapper>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
                      </svg>{" "}
                      {Number(el.view) <= 1000 ? (
                        <LikeViewText>{Number(el.view)}</LikeViewText>
                      ) : (
                        <LikeViewText>
                          {(Number(el.view) / 1000).toFixed(0) + "k"}
                        </LikeViewText>
                      )}
                    </LickViewWrapper>
                  </LikeViewBox>
                </ArticleSubBox>
              </ArticleLists>
            </ArticleBox>
          ))}
      </MainArticlesBlock>

      {isFetching && (
        <ProgressBox>
          <CircularProgress style={{ color: "#0057FF" }} />
        </ProgressBox>
      )}
    </>
  );
};

const ListTitleBlock = styled.div`
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  user-select: text;
  display: flex;
`;
const ListTitleBox = styled.div`
  margin: 40px 40px 60px;
  text-align: center;
`;
const ListTitle = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 0.9;
  margin: 0 0 15px;
`;
const ListDesc = styled.h2`
  font-size: 23px;
  font-weight: 400;
  line-height: 1.25;
  margin: 0 auto;
  max-width: 800px;
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ButtonStyleBox = styled.div`
  margin: 0 3px;
`;

const ManyOwnersDiv = styled.div`
  opacity: 0;
  z-index: 5;
  visibility: none;
  color: ${(props) => props.theme.colors.mainGray};
  transform: translateX(-50%);
  transition: visibility 0.25s linear, opacity 0.25s linear;
  background-color: #fff;
  top: 100%;
  left: 70%;
  position: absolute;
  border-radius: 3px;
  font-weight: 900;
`;

const ProfileName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
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
  top: -4px;
  right: auto;
  left: 66%;
`;

const OwnersTip = styled.div`
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.3);
  padding: 10px 10px 8px 10px;
  text-align: center;
  white-space: nowrap;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
  transition: filter 0.1s linear;
  border-radius: 50%;
`;

const ProfileImg2 = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
  transition: filter 0.1s linear;
  border-radius: 50%;
  &:hover {
    filter: brightness(80%);
    transition: all 0.1s linear;
  }
`;
const ProfileName2 = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  &:hover {
    text-decoration: underline;
    transition: all 0.1s linear;
  }
`;

const OwnersBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

/////////////////////////////////

const ProgressBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainArticlesBlock = styled.div`
  width: 100%;
  padding: 0 25px 40px 25px;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;
const ArticleBox = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
const ArticleLists = styled.li`
  max-width: 404px;
  min-width: 145px;
  width: 100%;
  height: 100%;
`;

const ArticleImg = styled.img`
  display: block;
  will-change: auto;
  object-fit: cover;
  transition: opacity 0.15s linear;
  width: 100%;
  border-radius: 4px;
`;
const ImgOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    0deg,
    rgba(25, 25, 25, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 4px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.15s linear;
`;
const ProjectTitle = styled.h3`
  position: absolute;
  padding: 10px 15px;
  bottom: 0;
  color: #fff;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  max-height: 43px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ArticleListsBox = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${(props) => props.background};

  &:hover ${ImgOverlay} {
    opacity: 1;
    transition: opacity 0.15s linear;
  }
`;

const ArticleSubBox = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  min-height: 45px;
`;

const ArticleProfileBox = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.1s linear;
  align-items: center;
  position: relative;

  &:hover ${ProfileImg} {
    filter: brightness(80%);
    transition: all 0.1s linear;
  }

  &:hover ${ProfileName} {
    text-decoration: underline;
    transition: all 0.1s linear;
  }
  &:hover ${ManyOwnersDiv} {
    opacity: 1;
    visibility: visible;
  }
`;

const LikeViewBox = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.mainGray};
  fill: ${(props) => props.theme.colors.mainGray};
  align-items: center;
  font-weight: 500;
`;
const LickViewWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 11px;
  line-height: 1.9;
`;
const LikeViewText = styled.span`
  margin-left: 3px;
`;

export default withRouter(MainArticles);
