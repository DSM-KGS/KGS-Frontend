import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function loginPage() {
  return (
    <>
      <Container>
        <OutLine>
          <LoginImg src="img/login_background.png" />
          <Box>
          <Subject>LOG IN</Subject>
            <Input type="text" placeholder="ID"/>
            <Input type="password" placeholder="PASSWORD"/>
            <Btn value="CONTINUE">CONTINUE</Btn>
            <P>비밀번호를 잊으셨다면 관리자에게 문의해주세요</P>
          </Box>
        </OutLine>
      </Container>
    </> 
  )
};

const Container = styled.div`
  width: 100%;
  height: 855px;
  background: linear-gradient(270deg, rgba(108, 74, 182, 0.20) 0%, rgba(255, 255, 255, 0.20) 37.24%), #FFF;
`
const OutLine = styled.div`
  display: flex;
  justify-content: center;
  margin-left:272px;
  width: 1375px;
  height: 747px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 6px 20px 0px #6C4AB6;
`
const Subject = styled.p`
  color:#3C1D81;
  margin:98px 0 73px 0;
  font-size: 40px;
  font-weight: 900;
  letter-spacing:8px;
`
const LoginImg = styled.img`
  width: 739px;
  height: 774px;
  margin-right: 32px;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 77px;
  float: right;
`
const Input = styled.input`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 53px;
  width: 524px;
  font-size:20px;
  font-weight: 500;
  letter-spacing: 2px;
  border-top:none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid linear-gradient(270deg, #B9E0FF 0%, rgba(185, 224, 255, 0.00) 50%), #6C4AB6;
  &:focus {
    outline:none;
  }
`
const Btn = styled.button`
  width: 524px;
  height: 71px;
  color:white;
  margin: 202px 0 27px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 8px;
  background: linear-gradient(270deg, #B9E0FF 0%, rgba(185, 224, 255, 0.00) 50%), #6C4AB6;
  box-shadow: 0px 3px 10px 0px #6C4AB6;
`
const P = styled.p`
  color:#A79DBB;
  font-size:18px;
  font-weight: 500;
  letter-spacing:1.8px;
`
export default loginPage;