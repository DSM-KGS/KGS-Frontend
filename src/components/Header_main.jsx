import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import * as S from "../style/Header";

function Header() {
  const [token, setToken] = useState("");
  return (
    <>
      <S.Background>
        <S.div>
          <S.logo src="img/logo.png"></S.logo>
          <S.div>
            <S.clickTitle>
              <S.title
                style={{
                  color: "white",
                }}
              >
                HOME
              </S.title>
            </S.clickTitle>
            {token ? (
              <S.noClickTitle>
                <S.title
                  style={{
                    color: "#a79dbb",
                  }}
                >
                  LOG OUT
                </S.title>
              </S.noClickTitle>
            ) : (
              <S.noClickTitle>
                <S.title
                  style={{
                    color: "#a79dbb",
                  }}
                >
                  LOG IN
                </S.title>
              </S.noClickTitle>
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
