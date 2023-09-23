import react from 'react';
import styled from 'styled-components';

function loginPage() {
  return (
    <>
      <div>
        <div>
          <loginImg scr="img/login_background.png" />
        </div>
          <h1>LOG IN</h1>
          <input type="text" placeholder="ID"/>
          <input type="password" placeholder="PASSWORD"/>
          <button value="CONTINUE"/>
          <p>비밀번호를 잊으셨다면 관리자에게 문의해주세요</p>
      </div>
    </> 
  )
};

const loginImg = styled.img`
  width:740px;
  height: 745px;
`
export default loginPage;