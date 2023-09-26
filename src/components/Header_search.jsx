import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../css/Header";

function Header() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("");

  const onHome = () => {
    window.location.assign("/");
  };
  const onLogout = () => {
    window.location.assign("/logout");
  };
  const onSearch = () => {
    if (token !== "") {
      window.location.assign("/search");
    } else {
      alert("로그인 먼저 해주세요.");
    }
  };

  return (
    <>
      <S.Background>
        <S.div>
          <S.logo src="img/logo.png"></S.logo>
          <S.div>
            <S.noClickTitle onClick={onHome}>
              <S.title
                style={{
                  color: "#a79dbb",
                }}
              >
                HOME
              </S.title>
            </S.noClickTitle>
            <S.noClickTitle onClick={onLogout}>
              <S.title
                style={{
                  color: "#a79dbb",
                }}
              >
                LOG OUT
              </S.title>
            </S.noClickTitle>
            <S.clickTitle onClick={onSearch}>
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
