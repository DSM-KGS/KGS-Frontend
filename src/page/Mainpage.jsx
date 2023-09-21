import React, { useState, useEffect } from "react";
import * as S from "../css/Main";
import * as A from "../css/Main2";
import axios from "axios";

function MainPage() {
  const [token, setToken] = useState("aaaa");
  return (
    <>
      {token ? (
        <A.Background>
          <A.main_left>
            <A.alarm src="img/main2_background.png"></A.alarm>
          </A.main_left>
          <A.main_right>
            <A.font>안녕하세요. OOO 선생님</A.font>
            <A.main_right_sort>
              <A.box>
                <A.main_div>
                  <A.alarmImg src="img/alarm.png"></A.alarmImg>
                  <A.main_content>
                    [XXX호] 움직임이 감지되었습니다.
                  </A.main_content>
                </A.main_div>
                <A.date>0000 / 00 / 00</A.date>
              </A.box>
            </A.main_right_sort>
            <A.main_right_sort>
              <A.box>
                <A.main_div>
                  <A.alarmImg src="img/alarm.png"></A.alarmImg>
                  <A.main_content>
                    [XXX호] 움직임이 감지되었습니다.
                  </A.main_content>
                </A.main_div>
                <A.date>0000 / 00 / 00</A.date>
              </A.box>
            </A.main_right_sort>
            <A.main_right_sort>
              <A.box>
                <A.main_div>
                  <A.alarmImg src="img/alarm.png"></A.alarmImg>
                  <A.main_content>
                    [XXX호] 움직임이 감지되었습니다.
                  </A.main_content>
                </A.main_div>
                <A.date>0000 / 00 / 00</A.date>
              </A.box>
            </A.main_right_sort>
            <A.main_right_sort>
              <A.box>
                <A.main_div>
                  <A.alarmImg src="img/alarm.png"></A.alarmImg>
                  <A.main_content>
                    [XXX호] 움직임이 감지되었습니다.
                  </A.main_content>
                </A.main_div>
                <A.date>0000 / 00 / 00</A.date>
              </A.box>
            </A.main_right_sort>
          </A.main_right>
        </A.Background>
      ) : (
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
      )}
    </>
  );
}

export default MainPage;
