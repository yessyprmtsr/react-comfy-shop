import React from 'react'
import styled from 'styled-components'
import { useUserContext } from "../context/user_context";
const LoginPage = () => {
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper className="page-100">
      <section>
        <h1>401</h1>
        <h3>Sorry, You need to login</h3>
        <button type="button" className="btn" onClick={loginWithRedirect}>
          login
        </button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default LoginPage;
