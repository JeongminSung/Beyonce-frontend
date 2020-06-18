import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

//슬라이더 라이브러리
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
};

export const MainFilterList = () => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    loadFilterList();
  }, []);

  //navList fetch
  const loadFilterList = async () => {
    const response = await fetch("http://localhost:3000/Data/MainList.json");
    const list = await response.json();
    setFilterList(list.data);
  };

  return (
    <>
      {filterList.map((el, idx) => (
        <Slider {...settings}>
          <div>
            <Link to={el.url} key={idx}>
              <FilterLists>
                <ListOverlay />
                <ListTitle>{el.title}</ListTitle>
                <FilterImg src={el.img} />
              </FilterLists>
            </Link>
          </div>
        </Slider>
      ))}
    </>
  );
};

export const ModalFilterList = () => {
  const [filterList, setFilterList] = useState([]);
  const [listCate, setListCate] = useState([]);

  useEffect(() => {
    loadFilterList();
  }, []);

  //navList fetch
  const loadFilterList = async () => {
    const response = await fetch("http://localhost:3000/Data/MainList.json");
    const list = await response.json();
    setFilterList(list.data);
    setListCate(list.category);
  };

  return (
    <>
      {listCate === "field" &&
        filterList.map((el, idx) => (
          <Link to={el.url} key={idx}>
            <FilterLists>
              <ListOverlay />
              <ListTitle>{el.title}</ListTitle>
              <FilterImg src={el.img} />
            </FilterLists>
          </Link>
        ))}
    </>
  );
};

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
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 1px 0 ${(props) => props.theme.colors.mainBlack};
  z-index: 2;
`;
