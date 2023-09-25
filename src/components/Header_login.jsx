import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

function Header() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("aaaa");
  return (
    <>
      <Container>
        <FlexContainer>
          <Logo src="img/logo.png" />
        <Box>
          <Li>HOME</Li>
          <BackgroundLi>LOG IN</BackgroundLi>
          <Li>SEARCH</Li>
        </Box>
        </FlexContainer>
      </Container>
    </>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(
      270deg,
      rgba(108, 74, 182, 0.2) 0%,
      rgba(225, 219, 241, 0) 50%
    ),
    #ffffff;
`
const Logo = styled.img`
  width: 100px;
  height: 35px;
  margin: 47px 0 0 51px;
  &:hover {
    cursor: pointer;
  }
`
const FlexContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 47px;
`
const Li = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 92px;
  color:#A79DBB;
  font-size: 20px;
  font-weight: 500;
  &:hover{
    cursor: pointer;
  }
`
const BackgroundLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  color: white;
  font-size:20px;
  font-weight: 500;
  list-style: none;
  margin-right: 92px;
  border-radius: 50px;
  background: linear-gradient(270deg, rgba(141, 158, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), #6C4AB6;
  &:hover{
    cursor:pointer;
  }
`

export default Header