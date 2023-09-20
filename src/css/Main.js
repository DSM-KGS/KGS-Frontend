import { styled } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 855px;
  background: linear-gradient(
      270deg,
      rgba(108, 74, 182, 0.2) 0%,
      rgba(225, 219, 241, 0) 50%
    ),
    #ffffff;
`;

export const main_background = styled.img`
  width: 1400px;
  margin: 60px 250px;
`;

export const font = styled.div`
  position: absolute;
  width: 333px;
  height: 186px;
  left: 433px;
  top: 209px;
  font-size: 90px;
  font-weight: 900;
  color: #6c4ab6;
`;

export const font_en = styled.div`
  position: absolute;
  left: 353px;
  top: 309px;
  font-size: 50px;
  font-weight: 700;
  color: #6c4ab6;
`;

export const font_kr = styled.div`
  position: absolute;
  left: 413px;
  top: 459px;
  font-size: 20px;
  font-weight: 900;
  color: #8d72e1;
`;

export const button = styled.div`
  position: absolute;
  width: 182px;
  height: 64px;
  left: 429px;
  top: 552px;
  background: linear-gradient(
      270deg,
      rgba(141, 158, 255, 0.8) 0%,
      rgba(108, 74, 182, 0.8) 100%
    ),
    #6c4ab6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const main_lock = styled.img`
  position: absolute;
  width: 690px;
  height: 668px;
  left: 904px;
  top: 23px;
`;

export const main_shadow = styled.img`
  position: absolute;
  width: 408px;
  height: 75px;
  left: 980px;
  top: 606px;
`;
