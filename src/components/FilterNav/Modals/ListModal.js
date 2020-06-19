import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListModal = ({ isOpen, close }) => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    loadFilterList();
  }, []);

  //navList fetch
  const loadFilterList = async () => {
    const response = await fetch(
      "http://10.58.3.78:8000/feed/main/0?limit=12&offset=0"
    );
    const list = await response.json();
    setFilterList(list.data.main_categories);
  };

  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <ModalOverlay onClick={close} />
          <ModalBlock>
            <ModalBox>
              <ModalWrapper>
                <ModalTitle>Galleries by top creative fields</ModalTitle>
                <ModalListBox>
                  {filterList.map((el, idx) => (
                    <Link to="/" key={idx}>
                      <FilterLists>
                        <ListOverlay />
                        <ListTitle>{el.title}</ListTitle>
                        <FilterImg src={el.img} />
                      </FilterLists>
                    </Link>
                  ))}
                </ModalListBox>
              </ModalWrapper>
            </ModalBox>
          </ModalBlock>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

// Styled-Components
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
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 1px 0 ${(props) => props.theme.colors.mainBlack};
  z-index: 2;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  opacity: 0.4;
  z-index: 10;
`;

const ModalBlock = styled.div`
  z-index: 11;
  overflow: auto;
  position: fixed;
  top: 18%;
  right: 0;
  width: 700px;
  height: 580px;
  border-radius: 3px;
  background-color: white;
  padding: 40px 35px;
  box-shadow: 0 2px 9px rgba(25, 25, 25, 0.25);
`;
const ModalBox = styled.ul``;
const ModalWrapper = styled.li``;
const ModalTitle = styled.h5`
  padding-left: 5px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 18px;
`;
const ModalListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export default ListModal;
