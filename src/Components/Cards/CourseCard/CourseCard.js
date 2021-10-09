import React from "react";
import styled from "styled-components";
export default function CourseCard(props) {
  return (
    <>
      <CardWrapper>
        <h3>{props.data.title}</h3>
        <p>{props.data.para}</p>
        <h4>{props.data.type}</h4>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px;
  background-color: white;
  max-width: 320px;
  text-align: left;
  min-width: 0;
  color: black;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 3px 0px;
  line-height: 1.5;
  margin: 24px 16px;
  transition: 0.5s ease-in-out;
  h3 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    margin-bottom: 24px;
    font-weight: 400;
  }
  :hover {
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;
