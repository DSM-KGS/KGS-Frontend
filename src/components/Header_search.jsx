import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../css/Header";

function Header() {
  const [token, setToken] = useState("aaaa");
  return (
    <>
      <S.Background>
        <S.div>
          <S.logo src="img/logo.png"></S.logo>
          <S.div>
            <S.noClickTitle>
              <S.title
                style={{
                  color: "#a79dbb",
                }}
              >
                HOME
              </S.title>
            </S.noClickTitle>
            <S.noClickTitle>
              <S.title
                style={{
                  color: "#a79dbb",
                }}
              >
                LOG OUT
              </S.title>
            </S.noClickTitle>
            <S.clickTitle>
              <S.title
                style={{
                  color: "white",
                }}
              >
                SEARCH
              </S.title>
            </S.clickTitle>
          </S.div>
        </S.div>
      </S.Background>
      <Outlet />
    </>
  );
}

export default Header;
