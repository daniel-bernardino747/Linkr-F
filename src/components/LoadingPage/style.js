import styled from 'styled-components'

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5em;
`
export const LoadingText = styled.p`
  display: ${(props) => (props.visible ? 'initial' : 'none')};
  opacity: 0.7;
  color: rgba(109, 109, 109, 1);
`
