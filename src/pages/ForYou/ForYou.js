import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInfiniteScroll from "../../components/FilterNav/MainArticles/useInfiniteScroll";
import { CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ForYou = ({ history }) => {
  /**필터 어떻게 하지?
   * 1. 카테고리를 클릭/ 가운데로 왔을 때 해당 id 값을 state에 저장하기
   * 2. mainArticle 안에서 state를 데이터 안에 이름으로 바꾸고
   * 3. 해당 state가 카테고리 클릭한 값으로 유동적으로 변화하면
   * 4. map 안에 들어간 el 값을 바꾸어주기
   * 5. 어떻게? : 애초에 fetch를 할 때 .data.[유동적state값] 으로 바꾸어 주면 될듯
   * 6. 그럼 map 안의 데이터들이 깊게 들어갈 필요 없에서 윗단계에서 처리 가능할듯
   */

  //데이터로 받아온 리스트가를 8개씩 추가하는 state, 스크롤이 바닥에 닿으면 기존에서 1씩 추가
  const [articleList, setArticleList] = useState([]);
  //처음에 빈배열로 주고 useeffect에서 가져올 때 조건을 주기
  //fetch이 되는지를 감시하는 state

  useEffect(() => {
    loadArticles();
  }, []);
  //cdm 로 8개 불러오는 호출

  //fetching이 되었을때 prevState에+ 8개 추가
  const fetchMoreListItems = async () => {
    const response = await fetch(
      "http://localhost:3000/Data/MainArticleList.json"
    );
    const list = await response.json();
    setTimeout(() => {
      setArticleList((prevState) => [...prevState, ...list.data.slice(0, 12)]);
      // ([...prevState, ...Array.from(Array(8).keys(), n => n + prevState.length + 1)]));
      //fetching하고 다시 false로 변경하기
      setIsFetching(false);
    }, 1200);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  //메인 아티클 목데이터
  const loadArticles = async () => {
    const response = await fetch(
      "http://localhost:3000/Data/MainArticleList.json"
    );
    const list = await response.json();
    setArticleList(list.data.slice(0, 12));
  };

  return (
    <>
      <Header />
      <ForYouIntro>
        <IntroText>Projects from creatives you follow and more</IntroText>
      </ForYouIntro>
      <ForYouBlock>
        {articleList.map((el, idx) => (
          <ArticleBox key={idx}>
            <ArticleLists>
              <ArticleListsBox
                background={el.background}
                onClick={() => history.push("/contents")}
              >
                <ImgOverlay>
                  <ProjectTitle>{el.title}</ProjectTitle>
                </ImgOverlay>
                <ArticleImg src={el.mainimg} />
              </ArticleListsBox>
              <ArticleSubBox>
                <ArticleProfileBox>
                  {el.profileimg !== "" ? (
                    <>
                      <ProfileImg src={el.profileimg} />
                      <ProfileName>{el.name}</ProfileName>
                    </>
                  ) : (
                    <>
                      <ProfileName>{el.name}</ProfileName>
                      <span
                        className="material-icons"
                        style={{ fontSize: "17px" }}
                      >
                        arrow_drop_down
                      </span>
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
                    <LikeViewText>{el.like}</LikeViewText>
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
                    <LikeViewText>{el.view}</LikeViewText>
                  </LickViewWrapper>
                </LikeViewBox>
              </ArticleSubBox>
            </ArticleLists>
          </ArticleBox>
        ))}
      </ForYouBlock>

      {isFetching && (
        <ProgressBox>
          <CircularProgress style={{ color: "#0057FF" }} />
        </ProgressBox>
      )}
      <Footer />
    </>
  );
};

const ForYouIntro = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  margin-top: 100px;
  justify-content: center;
`;

const IntroText = styled.h2`
  font-size: 30px;
  font-weight: 800;
`;

const ProgressBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForYouBlock = styled.div`
  width: 100%;
  padding: 0 25px;
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

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
  transition: filter 0.1s linear;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
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

export default withRouter(ForYou);
