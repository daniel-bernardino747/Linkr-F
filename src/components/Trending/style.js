import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  height: min(100%, 30em);
  padding: 1.5em 1.2em;
  border-radius: 0.5em;
  background-color: black;
  a {
    text-decoration: none;
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
