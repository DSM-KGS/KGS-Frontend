import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../css/Header";

function Header() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("");
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
          {token ? (
            <S.clickTitle>
              <S.title
                style={{
                  color: "white",
                }}
              >
                LOG OUT
              </S.title>
            </S.clickTitle>
          ) : (
            <S.clickTitle>
              <S.title
                style={{
                  color: "white",
                }}
              >
                LOG IN
              </S.title>
            </S.clickTitle>
          )}
          <S.noClickTitle>
            <S.title
              style={{
                color: "#a79dbb",
              }}
            >
              SEARCH
            </S.title>
          </S.noClickTitle>
        </S.div>
      </S.div>
    </S.Background>
    <Outlet />
  </>
  );
}

export default Header;