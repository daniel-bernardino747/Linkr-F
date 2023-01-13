import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 2.5em;

  color: white;

  @media (max-width: 1024px) {
    font-size: 1.8em;
  }
  @media (max-width: 860px) {
    padding: 1em 0.5em;
    font-size: 2em;
  }
`
export const Timeline = styled.div`
  h1 {
    margin-bottom: 1em;
    width: 100%;
    max-width: 610px;
  }
  li:first-child {
    ${(props) =>
      props.active
        ? css`
            animation-duration: 3s;
            animation-name: newpost;
            @keyframes newpost {
              from {
                box-shadow: 0px 0px 20px 4px rgba(24, 119, 242, 0.5);
              }

              to {
                border: none;
                box-shadow: none;
              }
            }
          `
        : ''}
  }
`
