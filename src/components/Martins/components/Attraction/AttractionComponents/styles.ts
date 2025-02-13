import styled from "styled-components";

export const AttractionComponentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: ${({ theme }) => theme['gray-600']};
  
  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }

  .line {
    display: inline-flex;
  }

  p {
    text-indent: 1.5rem;
  }

  #site-link {
    font-weight: 500;
    color: ${({ theme }) => theme['paz-bege-500']};
  }

  .contact-link {
    font-weight: 500;
    color: ${({ theme }) => theme['paz-bege-500']};
  }

  /* h3 {
    color: ${({ theme }) => theme['gray-600']};
  } */

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-400']};
  }

  ul {
    padding-left: 1.5rem;

    li ~ li {
      margin-top: 0.375rem;
    }
  }

  h4 {
    margin-top: 1rem;
  }

  .google-map-code {
    border-radius: 4px;
    overflow: hidden;
    
    iframe {
      width: 100%;
      height: 20rem;
    }
  }
`