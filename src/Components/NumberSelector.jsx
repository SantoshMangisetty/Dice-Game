import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({select,setselect}) => {
  const box = [1, 2, 3, 4, 5, 6];
  return (
    <NumberContainer>
      <div className="flex">
        {box.map((v, i) => {
          return (
            <Box
              isSelected={v == select}
              key={i}
              onClick={() => {
                setselect(v);
              }}
            >
              {v}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 66px;
  height: 66px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 900px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: 0.5s background ease-in;
  &:hover {
    box-shadow: 0px 0px 10px black;
    cursor: pointer;
  }
`;
