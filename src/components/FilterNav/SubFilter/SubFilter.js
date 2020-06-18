import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SubFilter() {
  const [subFilterList, setSubFilterList] = useState([]);
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    loadSubFilter();
  }, []);

  // useEffect(() => {
  //   shuffle();
  // }, []);

  // const shuffle = (subFilterList) => {
  //   for (let i = subFilterList.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [subFilterList[i], subFilterList[j]] = [subFilterList[j], subFilterList[i]];
  //   }
  //   console.log("랜덤: ", subFilterList);
  //   return subFilterList;
  // }

  const loadSubFilter = async () => {
    const response = await fetch(
      "http://10.58.3.78:8000/feed/main/0?limit=12&offset=0"
    );
    // const response = await fetch("http://localhost:3000/Data/MainList.json");
    const filters = await response.json();
    setSubFilterList(filters.data.main_categories.slice(0, 5));
  };

  return (
    <>
      {/* {console.log("subFilterList: ", subFilterList)} */}
      <SubFilterBlock>
        {subFilterList.length > 0 &&
          subFilterList.map((el, idx) => (
            <Link to="/" key={idx}>
              <SubFilterBox>
                <FilterTitle>{el.title}</FilterTitle>
              </SubFilterBox>
            </Link>
          ))}
      </SubFilterBlock>
    </>
  );
}

const SubFilterBlock = styled.div`
  display: flex;
  position: relative;
  margin: auto 0;
  width: 100%;
  justify-content: center;
`;
const SubFilterBox = styled.div`
  padding: 14px 21px 11px;
  margin: 0 5px 10px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(25, 25, 25, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.mainBlue};
    transition: all 0.2s ease-in-out;
  }
`;
const FilterTitle = styled.h5`
  font-size: 16px;
  font-weight: 700;
`;

export default SubFilter;
