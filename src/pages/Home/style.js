import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const messageNewPosts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5em;
  cursor: pointer;
  border-radius: 1em;
  background: rgba(24, 119, 242, 1);
  padding: 2em 1em;
  margin-bottom: 2em;
  font-weight: 500;
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02);
    transition: all 0.5s;
  }
`
