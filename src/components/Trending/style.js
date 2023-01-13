import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-left: 1em;
  position: sticky;
  top: 2em;
  flex-direction: column;
  width: 20em;
  height: min(100%, 30em);
  padding: 1.5em 1.2em;
  border-radius: 0.5em;
  background-color: black;
  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    width: 30vw;
  }

  @media (max-width: 860px) {
    display: none;
  }
`
export const Title = styled.h1`
  font-size: 1.5em;
`
export const Tags = styled.p`
  padding: 0.3em 0;
  a {
    color: ${(props) => props.theme.colors.text.primary};
  }
`
export const Line = styled.hr`
  width: 100%;
`
