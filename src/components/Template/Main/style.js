import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
`
export const Title = styled.h1`
  font-size: 2em;
  padding-bottom: 1em;

  @media (max-width: 1024px) {
    width: 55vw;
    font-size: 1.5em;
  }
`
export const Content = styled.div`
  display: flex;
  gap: 1em;
`
