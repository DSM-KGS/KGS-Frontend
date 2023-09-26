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
            <S.clickTitle onClick={onHome}>
              <S.title
                style={{
                  color: "white",
                }}
              >
                HOME
              </S.title>
            </S.clickTitle>
            {token ? (
              <S.noClickTitle onClick={onLogout}>
                <S.title
                  style={{
                    color: "#a79dbb",
                  }}
                >
                  LOG OUT
                </S.title>
              </S.noClickTitle>
            ) : (
              <S.noClickTitle onClick={onLogin}>
                <S.title
                  style={{
                    color: "#a79dbb",
                  }}
                >
                  LOG IN
                </S.title>
              </S.noClickTitle>
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
