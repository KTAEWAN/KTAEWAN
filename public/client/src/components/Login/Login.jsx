import React from 'react';
import './css/index.css';

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        {/* 로고 */}
        <div className="logo">
          <img src="/assets/welcome/logo.svg" alt="로고"></img>
        </div>
        {/* 로그인 폼 */}
        <form className="login-contents">
          {/* 이메일 */}
          <div className="email-inp custom-inp">
            <div className="title txt-bold">이메일</div>
            <div className="inp">
              <input type="email" placeholder="이메일을 입력해주세요" required />
            </div>
          </div>
          {/* 비밀번호 */}
          <div className="password-inp custom-inp">
            <div className="title txt-bold">비밀번호</div>
            <div className="inp">
              <input type="password" placeholder="비밀번호를 입력해주세요" required />
            </div>
          </div>
          {/* 로그인 버튼 */}
          <button className="login-btn" type="submit">
            로그인 하기
          </button>
        </form>
        {/* 회원가입으로 가기 */}
        <div className="go-join">
          <div className="title txt-bold">또는 회원가입하기</div>
          <div className="asset">
            {/* 화살표 */}
            <img src="/assets/welcome/arrow.svg" alt="회원가입하기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
