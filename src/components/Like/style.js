import styled from 'styled-components'

export const ContainerText = styled.div``
export const Text = styled.span`
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IconHeart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  svg {
    transition: fill 0.5s;
    width: 1.825em;
    height: 1.825em;
    fill: ${(props) =>
      props.checked
        ? props.theme.colors.buttons.liked
        : props.theme.colors.buttons.disliked};

    &:hover {
      opacity: 0.8;
      width: 1.6em;
      height: 1.6em;
    }
    &:active {
      opacity: 1;
      width: 1.5em;
      height: 1.5em;
      fill: ${(props) =>
        props.checked
          ? props.theme.colors.buttons.disliked
          : props.theme.colors.buttons.liked};
    }
  }

  @media (max-width: 1024px) {
    width: 30px;
  }
`
