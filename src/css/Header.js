import { styled } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(
      270deg,
      rgba(108, 74, 182, 0.2) 0%,
      rgba(225, 219, 241, 0) 50%
    ),
    #ffffff;
`;

export const div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const logo = styled.img`
  width: 100px;
  height: 35px;
  margin: 47px 0px 0px 51px;
  &:hover {
    cursor: pointer;
  }
`;

export const title = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const noClickTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 45px;
  margin: 45px 15px 0px 15px;
  border-radius: 50px;
`;

export const clickTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 45px;
  margin: 45px 15px 0px 15px;
  background: linear-gradient(
      270deg,
      rgba(141, 158, 255, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #6c4ab6;
  border-radius: 50px;
`;
