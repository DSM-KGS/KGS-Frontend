import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../css/Header";

function Header() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("");

  const onHome = () => {
    window.location.assign("/");
  };
  const onLogin = () => {
    window.location.assign("/login");
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
            {token ? (
              <S.clickTitle onClick={onLogout}>
                <S.title
                  style={{
                    color: "white",
                  }}
                >
                  LOG OUT
                </S.title>
              </S.clickTitle>
            ) : (
              <S.clickTitle onClick={onLogin}>
                <S.title
                  style={{
                    color: "white",
                  }}
                >
                  LOG IN
                </S.title>
              </S.clickTitle>
            )}
            <S.noClickTitle onClick={onSearch}>
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
