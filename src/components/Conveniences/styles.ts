import styled from "styled-components";
import doveEmoji from "../../assets/dove.svg";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const ConveniencesContainer = styled.section`
  padding: 1.5rem 0.75rem;
  background-color: ${({ theme }) => theme['chale-branco']};
  color: ${({ theme }) => theme['gray-800']};

  ul {
    padding-left: .75rem;
    padding-top: 1rem;
    li {
      padding-left: 28px;
      list-style: none;

      background-image: url(${doveEmoji});
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 20px;
    }

    li ~ li {
      margin-top: 1rem;
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 1.5rem 12.5vw;
  }
`