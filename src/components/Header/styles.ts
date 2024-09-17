import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4rem;
  background-color: transparent;
  /* background-color: ${({ theme }) => theme['paz-verde-500']}; */

  #chacaraLogo-footer {
    width: 12rem;
  }
  
  h2 {
    /* font-family: 'StarsLove'; */
  }

  .nav-btn {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .previous-btn {
    cursor: pointer;
  }
`