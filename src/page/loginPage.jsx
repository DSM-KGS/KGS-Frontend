import react from 'react';
import styled from 'styled-components';

function loginPage() {
  return (
    <>
      <Container>
        <LoginBox>
          <LoginImg src="img/login_background.png" />
          <Subject>LOG IN</Subject>
          <div>
            <Input type="text" placeholder="ID"/>
            <Input type="password" placeholder="PASSWORD"/>
            <Btn value="CONTINUE">CONTINUE</Btn>
            <P>비밀번호를 잊으셨다면 관리자에게 문의해주세요</P>
          </div>
          </LoginBox>
      </Container>
    </> 
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, rgba(108, 74, 182, 0.20) 0%, rgba(255, 255, 255, 0.20) 37.24%), #FFF;
`
const LoginBox = styled.div`
  width: 1375px;
  height: 747px;
  margin-left:272px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 6px 20px 0px #6C4AB6;
`
const Subject = styled.p`
  color:#3C1D81;
  font-size: 40px;
  font-weight: 900;
  letter-spacing:8px;
`
const LoginImg = styled.img`
  width:740px;
  height: 747px;
`
const Input = styled.input`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 524px;
  font-size:20px;
  letter-spacing: 2px;
  font-weight: 500;
  border-top:none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid linear-gradient(270deg, #B9E0FF 0%, rgba(185, 224, 255, 0.00) 50%), #6C4AB6;;
  &:focus {
    outline:none;
  }
`
const Btn = styled.button`
  width: 524px;
  height: 71px;
  color:white;
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