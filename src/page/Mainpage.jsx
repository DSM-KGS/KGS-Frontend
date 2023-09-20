import React, { useState, useEffect } from "react";
import * as S from "../css/Main";
import axios from "axios";

function MainPage() {
  return (
    <>
      <S.Background>
        <S.font>KGS</S.font>
        <S.font_en>
          Kisugsa tabang
          <br />
          Geumji System
        </S.font_en>
        <S.font_kr>기숙사 타방 금지 시스템</S.font_kr>
        <S.button>LOG IN</S.button>
        <S.main_background src="img/main_background.png"></S.main_background>
        <S.main_lock src="img/lock.png"></S.main_lock>
        <S.main_shadow src="img/shadow.png"></S.main_shadow>
      </S.Background>
    </>
  );
}

export default MainPage;
