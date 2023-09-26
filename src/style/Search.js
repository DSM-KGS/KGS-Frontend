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

export const backgroundImg = styled.img`
  width: 1500px;
  margin: 0px 0px 0px 150px;
`;

export const input_box = styled.div`
  position: absolute;
  width: 1336px;
  height: 83px;
  left: 296px;
  top: 246px;

  background: rgba(141, 114, 225, 0.07);
  border: 3px solid #6c4ab6;
  border-radius: 50px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const logo = styled.img`
  width: 45px;
  margin: 0px 30px;
`;

export const input = styled.input`
  width: 1100px;
  height: 60px;
  border: none;
  background: transparent;
  font-size: 25px;
  color: #8d72e1;
  padding: 0px 30px;
  border-left: solid 1px #8d72e1;
  &:focus {
    outline: none;
  }
`;

export const input_img = styled.img`
  width: 52px;
  margin: 0px 50px 0px 0px;
`;

export const absolute_img = styled.div`
  position: absolute;
  width: 155px;
  height: 155px;
  left: 1300px;
  background: linear-gradient(
      134.02deg,
      #b9e0ff -0.13%,
      rgba(185, 224, 255, 0) 69.08%
    ),
    linear-gradient(325.88deg, #ff008a -183.38%, rgba(255, 0, 138, 0) 77.95%),
    #6c4ab6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;
