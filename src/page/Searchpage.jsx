import React, { useState, useEffect } from "react";
import * as S from "../style/Search.js";
import axios from "axios";

function MainPage() {
  return (
    <>
      <S.Background>
        <S.backgroundImg src="img/search_background.png"></S.backgroundImg>
        <S.input_box>
          <S.absolute_img></S.absolute_img>
          <S.logo src="img/logo_search.png"></S.logo>
          <S.input placeholder="XXX호"></S.input>
          <S.input_img src="img/search.png"></S.input_img>
        </S.input_box>
      </S.Background>
    </>
  );
}

export default MainPage;
