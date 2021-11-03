import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";

const Wrapper = styled.div`
  display: flex;

  .main {
    width: 750px;
    height: 950px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div className = "main">
        <TopNav name = "Home"/>
        <span>Home1</span>
      </div>
    </Wrapper>
  );
};

export default Home;
