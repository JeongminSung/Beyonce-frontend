import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import SubFilter from "./SubFilter/SubFilter";
import MainArticles from "./MainArticles/MainArticles";
import ListModal from "../Modals/ListModal";

function FilterNav({ match }) {
  //states
  const [isModalOpen, setModal] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [clickFilter, setClickFilter] = useState(0);
  const [current, setCurrentIdx] = useState(0);

  //useEffects
  //------- componentDidMount
  useEffect(() => {
    loadFilterList();
  }, [match.params.id]);

  //------- componentDidUpdate
  useEffect(() => {
    if (filterList.length > 0) {
      // 패치로 받은 리스트가 들어온걸 확인할 땐 반드시 length 비교.
      // [] 빈 배열도 'true'로 친다
      setCopyList(getListItems(9, current));
    }
  }, [filterList]);

  const getItem = (index) => {
    let i = index;
    while (i < 0) {
      i += filterList.length;
      if (filterList.length === 0) {
        break;
      }
    }
    return filterList[i % filterList.length];
  };

  const getListItems = (range = 9, index = 0) => {
    const center = Math.ceil(range / 2) - 1;

    return Array(range)
      .fill()
      .map((_, i) => getItem(i - center + index));
  };

  //navList fetch
  const loadFilterList = async () => {
    // const response = await fetch("http://localhost:3000/Data/MainList.json");
    const response = await fetch(
      `http://10.58.3.78:8000/feed/main/0?limit=12&offset=0`
    );
    const list = await response.json();
    // console.log(response);
    setFilterList(list.data.main_categories);
    setCopyList(filterList);
  };

  //카테고리 클릭 필터
  const chooseFilter = (idx) => {
    setClickFilter(idx);
  };

  //click functions
  const clickRight = () => {
    setTimeout(() => {
      setCopyList(getListItems(9, current - 1));
      setCurrentIdx(current - 1);
    }, 200);
  };

  const clickLeft = () => {
    setTimeout(() => {
      setCopyList(getListItems(9, current + 1));
      setCurrentIdx(current + 1);
    }, 200);
  };

  // List 모달
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {/* {console.log("clickFilter: ", clickFilter)} */}
      <FilterNavBlock>
        <SliderBtnLeft onClick={clickLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.924"
            height="17.665"
            viewBox="0 0 11.924 17.665"
          >
            <path
              d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
              transform="translate(-9.75 -3.5)"
            ></path>
          </svg>
        </SliderBtnLeft>
        <SliderBtnRight onClick={clickRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.924"
            height="17.665"
            viewBox="0 0 11.924 17.665"
          >
            <path
              d="M9.75,6.591l5.741,5.741L9.75,18.074l3.091,3.091,8.832-8.832L12.841,3.5Z"
              transform="translate(-9.75 -3.5)"
            ></path>
          </svg>
        </SliderBtnRight>
        <SeeAllBtn onClick={openModal}>
          <svg viewBox="0 0 22 8" width="22" height="8">
            <circle cx="2.5" cy="2.5" r="2.5"></circle>
            <circle cx="10.5" cy="2.5" r="2.5"></circle>
            <circle cx="18.5" cy="2.5" r="2.5"></circle>
          </svg>
        </SeeAllBtn>
        <ListModal isOpen={isModalOpen} close={closeModal} />
        <FilterNavBox>
          {copyList.length > 0 &&
            copyList.map((el, idx) => (
              <Link
                to={`/galleries/${el.id}`}
                key={el.id}
                onClick={() => chooseFilter(el.id)}
              >
                <FilterLists>
                  <ListOverlay />
                  <ListTitle>{el.title}</ListTitle>
                  <FilterImg src={el.img} />
                </FilterLists>
              </Link>
            ))}
        </FilterNavBox>
      </FilterNavBlock>
      <SubFilter />
      <MainArticles clickFilter={clickFilter} />
    </>
  );
}

const ListOverlay = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.mainBlue};
  transition: opacity 0.15s linear;
  z-index: 2;
`;

const FilterLists = styled.li`
  margin: 5px 5px;
  width: 200px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.mainBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: pointer;

  &:hover ${ListOverlay} {
    opacity: 1;
  }
  &::nth-child(4) ${ListOverlay} {
    opacity: 1;
  }
`;

const FilterImg = styled.img`
  width: 100px;
  position: absolute;
  width: 100%;
  z-index: 0;
  opacity: 0.5;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 1px 0 ${(props) => props.theme.colors.mainBlack};
  z-index: 3;
`;
const SliderBtnRight = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  right: 100px;
  z-index: 5;
  align-items: center;
  background-color: #fff;
  fill: ${(props) => props.theme.colors.iconGray};
  box-shadow: 0 2px 10px rgba(25, 25, 25, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.15s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.borderGray};
    fill: ${(props) => props.theme.colors.mainBlack};
    transition: all 0.15s linear;
  }
`;

const SliderBtnLeft = styled(SliderBtnRight)`
  right: 0;
  left: 10px;
  transform: rotate(180deg) translateY(50%);
  box-shadow: 0 -2px 3px rgba(25, 25, 25, 0.25);
`;

const SeeAllBtn = styled(SliderBtnRight)`
  height: 68px;
  width: 68px;
  border-radius: 6px;
  right: 15px;
  &:hover {
    background-color: ${(props) => props.theme.colors.mainBlue};
    fill: #fff;
  }
`;

const FilterNavBlock = styled.nav`
  margin-top: 60px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  width: 100%;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 4;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
  }

  &:after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    z-index: 4;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const FilterNavBox = styled.ul`
  display: inline-flex;
  /* left: 44%; */
  right: 6%;
  position: relative;
  /* transform: translateX(${(props) => props.transform}px); */
  transition: all 0.3s cubic-bezier(1, 0, 0.685, 0.69);
`;

export default withRouter(FilterNav);
//라우터로 묶여있지 않으면 withRouter로 묶어줘야한다.
