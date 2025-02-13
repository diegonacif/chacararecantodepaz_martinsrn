import styled from "styled-components";
import bgBanner from "../../assets/chacara-photos/chacara-08.jpg";

export const IntroBannerContainer = styled.section`
  position: relative;
  display: flex;
  /* height: calc(100dvh - 4rem); */
  height:100dvh;
  background: url(${bgBanner});
  background-size: cover;
  background-position: center;
  color: black;

  button {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    height: 2.5rem;
    width: 14rem;

    font-size: 1rem;
    color: ${({ theme }) => theme['chale-branco']};
    font-weight: 400;
    background-color: ${({ theme }) => theme['paz-verde-500']};
    border: none;
    border-radius: 6px;
    filter: drop-shadow(1px 1px 3px ${({ theme }) => theme['gray-700']});

    cursor: pointer;
  }
`