import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 38px;
  width: 611px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`
export const Timeline = styled.div`
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
