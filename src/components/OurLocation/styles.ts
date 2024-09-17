import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const OurLocationContainer = styled.section`
  padding: 0 0.75rem 1rem;
  background-color: ${({ theme }) => theme['chale-branco']};

  h2 {
    color: ${({ theme }) => theme['paz-verde-500']};
    text-align: center;
    font-size: 1.75rem;
    padding: 0.75rem 0;
    filter: drop-shadow(1px 1px 2px ${({ theme }) => theme['gray-300']});
  }

  .google-map-code {
    border-radius: 4px;
    overflow: hidden;
    
    iframe {
      width: 100%;
      height: 20rem;
    }

    & ~ .google-map-code {
      margin-top: 1.5rem;
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 0 12.5vw 1rem;
  }
`